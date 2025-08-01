"use client";

import { useState } from "react";
import Image from "next/image";

import { useForm } from "@tanstack/react-form";

import { FormDataTypes, formSchema } from "@/lib/types";

import FirstStep from "./components/first-step";

import ProgressBar from "./components/ui/progressbar";

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

    onSubmit: async ({ value }: { value: FormDataTypes }) => {},
    validators: {
      onChange: formSchema,
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-8 items-center justify-center min-h-full">
      <Image
        src="/logo.svg"
        width={300}
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
        className="mx-auto max-w-lg sm:max-w-2xl py-8"
      >
        {step === 1 ? (
          <FirstStep form={form} step={step} setStep={setStep} />
        ) : null}

        {/* Progress Bar */}
        {step !== 4 && (
          <div className="flex flex-col-reverse items-start gap-4 justify-between w-full mt-4 transition-all duration-300">
            <ProgressBar currentStep={step} totalSteps={3} />
          </div>
        )}
      </form>
    </div>
  );
}
