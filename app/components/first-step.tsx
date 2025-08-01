import { AnyFieldApi } from "@tanstack/react-form";

import {
  Accessibility,
  GraduationCap,
  Hospital,
  Stethoscope,
  Syringe,
} from "lucide-react";

import FieldInfo from "./ui/field-info";

export default function FirstStep({ form, step, setStep }: Props) {
  return (
    <div className="relative space-y-6">
      {/* Header */}
      <h2 className="text-foreground text-lg sm:text-xl md:text-center tracking-normal font-semibold">
        What type of
        <span className="font-extrabold"> facility </span>
        would you like to have trained?
      </h2>

      {/* Form Field */}
      <div className="grid md:grid-cols-2 gap-4">
        <form.Field name="organization">
          {(field: AnyFieldApi) => {
            return (
              <>
                {/* Medical Practice */}
                <div>
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="organization-1"
                  >
                    <input
                      id="organization-1"
                      name="organization"
                      type="radio"
                      value="Medical Practice"
                      checked={field.state.value === "Medical Practice"}
                      onChange={() => field.handleChange("Medical Practice")}
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <Stethoscope
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>Medical Practice</span>
                  </label>
                </div>

                {/* Dental Office */}
                <div>
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="organization-2"
                  >
                    <input
                      id="organization-2"
                      name="organization"
                      type="radio"
                      value="Dental Office"
                      checked={field.state.value === "Dental Office"}
                      onChange={() => field.handleChange("Dental Office")}
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <Syringe
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>Dental Office</span>
                  </label>
                </div>

                {/* Care Facility  */}
                <div>
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="organization-3"
                  >
                    <input
                      id="organization-3"
                      name="organization"
                      type="radio"
                      value="Care Facility"
                      checked={field.state.value === "Care Facility"}
                      onChange={() => field.handleChange("Care Facility")}
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <Hospital
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>Care Facility</span>
                  </label>
                </div>

                {/* Physiotherapy Treatment  */}
                <div>
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="organization-4"
                  >
                    <input
                      id="organization-4"
                      name="organization"
                      type="radio"
                      value="Physiotherapy Treatment"
                      checked={field.state.value === "Physiotherapy Treatment"}
                      onChange={() =>
                        field.handleChange("Physiotherapy Treatment")
                      }
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <Accessibility
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>Physiotherapy Treatment</span>
                  </label>
                </div>

                {/* Daycare Center or School */}
                <div>
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="organization-5"
                  >
                    <input
                      id="organization-5"
                      name="organization"
                      type="radio"
                      value="Daycare Center or School"
                      checked={field.state.value === "Daycare Center or School"}
                      onChange={() =>
                        field.handleChange("Daycare Center or School")
                      }
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <GraduationCap
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>Daycare Center or School</span>
                  </label>
                </div>

                {/* Error */}
                <FieldInfo field={field} />
              </>
            );
          }}
        </form.Field>
      </div>
    </div>
  );
}

type Props = {
  form: any;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
