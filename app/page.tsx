"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { useForm } from "@tanstack/react-form";

import { FormDataTypes, formSchema } from "@/lib/types";

import FirstStep from "./components/first-step";
import SecondStep from "./components/second-step";
import ThirdStep from "./components/third-step";

import ProgressBar from "./components/ui/progressbar";
import SubmitButton from "./components/ui/submit-button";
import BackButton from "./components/ui/back-button";

export default function Home() {
  // Step Number
  const [step, setStep] = useState<number>(1);

  // Form State
  const form = useForm({
    defaultValues: {
      organizationName: "",
      fullName: "",
      email: "",
      organization: "Medical Practice",
      phone: 0,
      person: "Up to 5",
    } as FormDataTypes,

    onSubmit: async ({ value }: { value: FormDataTypes }) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Submitted Data:", value);
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
        ) : null}

        {/* Buttons And Progress Bar */}
        {step !== 4 && (
          <div className="flex flex-col-reverse items-start gap-4 justify-between w-full mt-4 transition-all duration-300">
            {step != 1 && <BackButton step={step} setStep={setStep} />}
            <ProgressBar currentStep={step} totalSteps={3} />

            {step === 3 && (
              <>
                {/* Submit Button */}
                <SubmitButton form={form} />

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
      </form>
    </div>
  );
}
