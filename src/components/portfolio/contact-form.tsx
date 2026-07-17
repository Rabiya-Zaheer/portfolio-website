"use client";

import * as React from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const { showToast } = useToast();
  const [form, setForm] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitting, setSubmitting] = React.useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      // clear that field's error as the user types
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormState;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      showToast("Please fix the errors below", "Some fields need your attention.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showToast("Message sent", "Thanks for reaching out — I'll get back to you soon.");
        setForm(initialState);
      } else {
        showToast("Something went wrong", data.error || "Please try again in a moment.");
      }
    } catch {
      showToast("Network error", "Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          value={form.subject}
          onChange={handleChange("subject")}
          placeholder="What's this about?"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Tell me a bit about your project or opportunity..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}