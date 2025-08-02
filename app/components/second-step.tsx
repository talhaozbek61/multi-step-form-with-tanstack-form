import { AnyFieldApi } from "@tanstack/react-form";

import { UsersIcon } from "lucide-react";

import FieldInfo from "./ui/field-info";

export default function SecondStep({ form, step, setStep }: Props) {
  return (
    <div className="relative space-y-6">
      {/* Header */}
      <h2 className="text-foreground text-lg sm:text-xl text-center tracking-normal font-semibold">
        How many
        <span className="font-bold"> people </span>
        are expected to attend?
      </h2>

      {/* Form Field */}
      <div className="grid md:grid-cols-2 gap-4 md:min-w-[630px]">
        <form.Field name="person">
          {(field: AnyFieldApi) => {
            return (
              <>
                {/* Up to 5 */}
                <div className="min-w-full">
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="person-1"
                  >
                    <input
                      id="person-1"
                      name="person"
                      type="radio"
                      value="Up to 5"
                      checked={field.state.value === "Up to 5"}
                      onChange={() => field.handleChange("Up to 5")}
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <UsersIcon
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>Up to 5</span>
                  </label>
                </div>

                {/* 6–10 */}
                <div className="min-w-full">
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="person-2"
                  >
                    <input
                      id="person-2"
                      name="person"
                      type="radio"
                      value="6–10"
                      checked={field.state.value === "6–10"}
                      onChange={() => field.handleChange("6–10")}
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <UsersIcon
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>6–10</span>
                  </label>
                </div>

                {/* 11–15 */}
                <div className="min-w-full">
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="person-3"
                  >
                    <input
                      id="person-3"
                      name="person"
                      type="radio"
                      value="11–15"
                      checked={field.state.value === "11–15"}
                      onChange={() => field.handleChange("11–15")}
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <UsersIcon
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>11–15</span>
                  </label>
                </div>

                {/* 16–20 */}
                <div className="min-w-full">
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="person-4"
                  >
                    <input
                      id="person-4"
                      name="person"
                      type="radio"
                      value="16–20"
                      checked={field.state.value === "16–20"}
                      onChange={() => field.handleChange("16–20")}
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <UsersIcon
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>16–20</span>
                  </label>
                </div>

                {/* 22+ */}
                <div className="min-w-full">
                  <label
                    className="text-start text-foreground rounded-lg border border-transparent hover:border-primary bg-white px-6 py-4 shadow-sm focus:outline-none flex items-center gap-x-2 w-full cursor-pointer transition-all hover:scale-95 duration-300"
                    htmlFor="person-5"
                  >
                    <input
                      id="person-5"
                      name="person"
                      type="radio"
                      value="22+"
                      checked={field.state.value === "22+"}
                      onChange={() => field.handleChange("22+")}
                      onClick={() => setStep(step + 1)}
                      className="absolute w-0 h-0"
                    />
                    <UsersIcon
                      className="h-5 w-5 stroke-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>22+</span>
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
