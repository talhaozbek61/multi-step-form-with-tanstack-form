"use server";

import { FormDataTypes, formSchema } from "@/lib/types";

import { verifyReCAPTCHA } from "@/utils/verifyCaptchaToken";

export async function submitFormAction(prevState: null, formData: FormData) {
  // Extracting form data
  const rawData: FormDataTypes = {
    organizationName: formData.get("organizationName") as string,
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    organization: formData.get("organization") as
      | "Medical Practice"
      | "Dental Office"
      | "Care Facility"
      | "Physiotherapy Treatment"
      | "Daycare Center or School",
    phone: formData.get("phone") as string,
    person: formData.get("person") as
      | "Up to 5"
      | "6–10"
      | "11–15"
      | "16–20"
      | "22+",
    meetingDate: new Date(formData.get("meetingDate") as string),
  };

  const captchaToken = formData.get("captcha") as string | null;

  // Verify reCAPTCHA token
  const isValidCaptcha = await verifyReCAPTCHA(captchaToken as string);

  if (!isValidCaptcha.success) {
    return {
      status: false,
      error: isValidCaptcha.message || "Recaptcha verification failed",
    };
  }

  // Validate form data against the schema
  const parsed = formSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      status: false,
      error: parsed.error.errors.map((error) => error.message).join(", "),
    };
  }

  return { status: true };
}
