"use server";

import { z } from "zod";
import { getSupabase } from "@/lib/supabase/server";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name.").max(200),
  company: z.string().trim().max(200).optional(),
  email: z.email("Please enter a valid email address.").trim().max(320),
  budget: z.string().trim().max(120).optional(),
  message: z.string().trim().max(5000).optional(),
});

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof enquirySchema>, string>>;
};

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real people never fill this field in.
  if (formData.get("website")) return { status: "success" };

  const parsed = enquirySchema.safeParse({
    name: formData.get("name") ?? "",
    company: formData.get("company") || undefined,
    email: formData.get("email") ?? "",
    budget: formData.get("budget") || undefined,
    message: formData.get("message") || undefined,
  });

  if (!parsed.success) {
    const fieldErrors: EnquiryState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof NonNullable<EnquiryState["fieldErrors"]>;
      fieldErrors[key] ??= issue.message;
    }
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors };
  }

  const supabase = getSupabase();
  if (!supabase) {
    console.error("[enquiry] Supabase is not configured (NEXT_PUBLIC_SUPABASE_URL / key missing).");
    return {
      status: "error",
      message: "We couldn’t send that just now — please email info@machinenative.co instead.",
    };
  }

  const { error } = await supabase.from("enquiries").insert(parsed.data);
  if (error) {
    console.error("[enquiry] insert failed:", error.message);
    return {
      status: "error",
      message: "We couldn’t send that just now — please email info@machinenative.co instead.",
    };
  }

  return { status: "success" };
}
