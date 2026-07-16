"use client";

import * as React from "react";
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

export function ContactForm() {
  const { showToast } = useToast();
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Structured so this can call the real /api/contact endpoint once
      // backend logic (email delivery / database) is implemented in Phase 2.
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // Frontend-only for now — submission always resolves for the user.
    } finally {
      setSubmitting(false);
      showToast("Message sent", "Backend integration coming soon.");
      setForm(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          required
          value={form.subject}
          onChange={handleChange("subject")}
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          required
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Tell me a bit about your project or opportunity..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
