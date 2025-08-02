import { AnyFieldApi } from "@tanstack/react-form";

import FieldInfo from "./ui/field-info";

export default function ThirdStep({ form }: any) {
  return (
    <div className="relative space-y-6">
      {/* Header */}
      <h2 className="text-foreground text-lg sm:text-xl text-center tracking-normal font-semibold">
        How can we reach you?
      </h2>

      {/* Form Field */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:min-w-[630px]">
        {/* Organization Name */}
        <form.Field name="organizationName">
          {(field: AnyFieldApi) => {
            return (
              <div className="space-y-1">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium"
                >
                  Name of The Organization
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Name of The Organization"
                  className="block w-full border border-muted/20 focus-within:border-primary py-3 px-4 shadow-sm focus:outline-none rounded-lg"
                />
                <FieldInfo field={field} />
              </div>
            );
          }}
        </form.Field>

        {/* Contact person - Full Name */}
        <form.Field name="fullName">
          {(field: AnyFieldApi) => {
            return (
              <div className="space-y-1">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium"
                >
                  Contact person
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="First and last name"
                  className="block w-full border border-muted/20 focus-within:border-primary py-3 px-4 shadow-sm focus:outline-none rounded-lg"
                />
                <FieldInfo field={field} />
              </div>
            );
          }}
        </form.Field>

        {/* Telephone Number */}
        <form.Field name="phone">
          {(field: AnyFieldApi) => {
            return (
              <div className="space-y-1">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium"
                >
                  Telephone Number
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Telephone Number"
                  className="block w-full border border-muted/20 focus-within:border-primary py-3 px-4 shadow-sm focus:outline-none rounded-lg"
                />
                <FieldInfo field={field} />
              </div>
            );
          }}
        </form.Field>

        {/* Email */}
        <form.Field name="email">
          {(field: AnyFieldApi) => {
            return (
              <div className="space-y-1">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Email Address"
                  className="block w-full border border-muted/20 focus-within:border-primary py-3 px-4 shadow-sm focus:outline-none rounded-lg"
                />
                <FieldInfo field={field} />
              </div>
            );
          }}
        </form.Field>

        {/* Meetin Date */}
        <form.Field name="meetingDate">
          {(field: AnyFieldApi) => {
            return (
              <div className="space-y-1 md:col-span-2">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium"
                >
                  Preferred date or period for training
                </label>
                <input
                  type="date"
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="block w-full border border-muted/20 focus-within:border-primary py-3 px-4 shadow-sm focus:outline-none rounded-lg"
                />

                <FieldInfo field={field} />
              </div>
            );
          }}
        </form.Field>
      </div>
    </div>
  );
}
