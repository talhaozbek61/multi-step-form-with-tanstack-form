"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

import { toast, Toaster } from "sonner";

import { useForm } from "@tanstack/react-form";

import { FormDataTypes, formSchema } from "@/lib/types";

import { submitFormAction } from "./actions";

import FirstStep from "./components/first-step";
import SecondStep from "./components/second-step";
import ThirdStep from "./components/third-step";

import ProgressBar from "./components/ui/progressbar";
import SubmitButton from "./components/ui/submit-button";
import BackButton from "./components/ui/back-button";
import LastStep from "./components/last-step";

export default function Home() {
  // Step Number
  const [step, setStep] = useState<number>(1);

  // Google ReCaptcha Token
  const [token, setToken] = useState<string | null>(null);

  const [submittedData, setSubmittedData] = useState<FormDataTypes | null>(
    null
  );

  // Form State
  const form = useForm({
    defaultValues: {
      organizationName: "",
      fullName: "",
      email: "",
      organization: "Medical Practice",
      phone: "",
      person: "Up to 5",
    } as FormDataTypes,

    onSubmit: async ({ value }: { value: FormDataTypes }) => {
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      if (!token) {
        toast.error("Please complete the Recaptcha verification.");
        return;
      }

      try {
        const formData = new FormData();

        // Append all form values to FormData
        Object.entries(value).forEach(([key, val]) => {
          formData.append(key, String(val));
        });

        // Append the reCAPTCHA token
        formData.append("captcha", token);

        // Call the action to submit the form
        const response = await submitFormAction(null, formData);

        if (response.status) {
          toast.success("Form submitted successfully!");
          setStep(4);
          setSubmittedData(value);
        } else {
          toast.error(response.error);
          console.log("Validation errors: " + response.error);
        }
      } catch (err) {
        console.error("Error during form submission:", err);
        toast.error("An error occurred while submitting the form.");
        return;
      }
    },
    validators: {
      onChange: formSchema,
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 lg:py-0 lg:px-8 flex flex-col gap-8 items-center justify-center min-h-full">
      <Image
        src="/logo.svg"
        width={400}
        height={56}
        alt="Logo Self-Education"
        priority
        className="h-14 w-auto"
      />

      {/* */}
      <Toaster richColors position="bottom-center" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="mx-auto w-full max-w-lg sm:max-w-2xl py-8"
      >
        {step === 1 ? (
          <FirstStep form={form} step={step} setStep={setStep} />
        ) : step === 2 ? (
          <SecondStep form={form} step={step} setStep={setStep} />
        ) : step === 3 ? (
          <ThirdStep form={form} />
        ) : step === 4 ? (
          <LastStep submittedData={submittedData} />
        ) : null}

        {/* Buttons And Progress Bar */}
        {step !== 4 && (
          <div className="flex flex-col-reverse items-start gap-4 justify-between w-full mt-4 transition-all duration-300">
            {step != 1 && <BackButton step={step} setStep={setStep} />}
            <ProgressBar currentStep={step} totalSteps={3} />

            {step === 3 && (
              <>
                {/* Submit Button */}
                <SubmitButton form={form} token={token} />

                {/* Terms of privacy policy */}
                <p className="text-sm leading-6 text-muted">
                  By submitting this form, you agree to the{" "}
                  <Link
                    className="font-semibold text-primary hover:underline"
                    href="https://talhaozbek.com/?multi-step-form-with-tanstack"
                    target="_blank"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </>
            )}
          </div>
        )}

        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        >
          <GoogleReCaptcha
            onVerify={(token) => {
              setToken(token);
            }}
          />
        </GoogleReCaptchaProvider>
      </form>
    </div>
  );
}
