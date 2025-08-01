import type { AnyFieldApi } from "@tanstack/react-form";

export default function FieldInfo({ field }: { field: AnyFieldApi }) {
  // console.log(field.state.meta.errors);

  return (
    <span className="text-red-500 text-xs font-medium md:col-span-2">
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em>{field.state.meta.errors.map((err) => err.message).join(",")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </span>
  );
}
