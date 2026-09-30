"use client";

import { useActionState, useEffect } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fields = [
  { name: "name", label: "Name", placeholder: "Sarah Nakato", type: "text", autoComplete: "name", required: true },
  { name: "company", label: "Company", placeholder: "Acme Ltd", type: "text", autoComplete: "organization" },
  { name: "email", label: "Email", placeholder: "sarah@acme.com", type: "email", autoComplete: "email", required: true },
  { name: "budget", label: "Budget", placeholder: "$10,000 – $25,000", type: "text" },
] as const;

const initialState: EnquiryState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const sent = state.status === "success";

  useEffect(() => {
    if (state.status === "mailto" && state.mailto) window.location.href = state.mailto;
  }, [state]);

  return (
    <form
      action={formAction}
      noValidate
      className="relative flex flex-col gap-[18px] rounded-[20px] border border-white/12 bg-surface px-7 pb-[30px] pt-8 text-left"
    >
      {fields.map((f) => {
        const error = state.fieldErrors?.[f.name];
        return (
          <div key={f.name} className="flex flex-col gap-2">
            <Label htmlFor={`enquiry-${f.name}`}>
              {f.label}
              {"required" in f && f.required ? <span className="sr-only"> (required)</span> : null}
            </Label>
            <Input
              id={`enquiry-${f.name}`}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              autoComplete={"autoComplete" in f ? f.autoComplete : undefined}
              required={"required" in f ? f.required : undefined}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `enquiry-${f.name}-error` : undefined}
              disabled={sent}
            />
            {error ? (
              <p id={`enquiry-${f.name}-error`} className="text-[13px] text-destructive">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <div className="flex flex-col gap-2">
        <Label htmlFor="enquiry-message">Project</Label>
        <Textarea
          id="enquiry-message"
          name="message"
          rows={4}
          placeholder="What are you building, and by when?"
          disabled={sent}
        />
      </div>

      {/* Honeypot, hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Button type="submit" size="block" className="mt-1.5 text-[15px]" disabled={pending || sent}>
        {sent
          ? "Sent — we’ll reply within a day"
          : pending
            ? "Sending…"
            : state.status === "mailto"
              ? "Opening your email app…"
              : "Send enquiry"}
      </Button>

      <p role="status" aria-live="polite" className="min-h-0 text-[13px] text-destructive empty:hidden">
        {state.status === "error" ? state.message : ""}
        {state.status === "mailto" ? (
          <span className="text-mute-2">
            Didn’t open? Email us at{" "}
            <a href={state.mailto} className="text-accent underline-offset-4 hover:underline">
              info@machinenative.co
            </a>
            .
          </span>
        ) : null}
      </p>
    </form>
  );
}
