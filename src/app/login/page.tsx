"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function LoginPage() {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [cooldown, setCooldown] = React.useState(0);

  // Countdown timer effect
  React.useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (cooldown > 0) return;

    setLoading(true);

    if (!executeRecaptcha) {
      setError("Security check not ready yet. Please try again in a moment.");
      setLoading(false);
      return;
    }

    const recaptchaToken = await executeRecaptcha("login");

    const verifyRes = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: recaptchaToken }),
    });
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      setError("Bot verification failed. Please try again.");
      setLoading(false);
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error === "RATE_LIMITED") {
      setCooldown(60);
      setError("Too many login attempts. Please wait before trying again.");
    } else if (res?.error) {
      setError("Invalid email or password.");
    } else {
      router.push("/dashboard");
    }
  };

  const isDisabled = loading || cooldown > 0;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5 rounded-2xl border p-8">
        <h1 className="text-2xl font-semibold text-center">Admin Login</h1>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDisabled}
            className="w-full rounded-md border px-3 py-2 disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isDisabled}
            className="w-full rounded-md border px-3 py-2 disabled:opacity-50"
          />
        </div>

        {error && (
          <div className="rounded-md bg-red-50 px-3 py-2">
            <p className="text-sm text-red-600">{error}</p>
            {cooldown > 0 && (
              <p className="text-xs text-red-500 mt-1">
                You can try again in {cooldown} second{cooldown !== 1 ? "s" : ""}.
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={isDisabled}
          className="w-full rounded-md bg-black py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {cooldown > 0
            ? `Try again in ${cooldown}s`
            : loading
            ? "Logging in..."
            : "Login"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" className="underline" target="_blank">
            Privacy Policy
          </a>{" "}
          applies.
        </p>
      </form>
    </div>
  );
}