import { AnyFormState } from "@tanstack/react-form";

export default function SubmitButton({ form, token }: Props) {
  return (
    <form.Subscribe
      selector={(state: AnyFormState) => [state.isValid, state.isSubmitting]}
    >
      {([isValid, isSubmitting]: [boolean, boolean]) => (
        <button
          type="submit"
          disabled={!isValid || isSubmitting || !token}
          className={`px-4 py-2 rounded-lg text-white transition duration-300 w-full truncate ${
            !isValid || isSubmitting || !token
              ? "bg-primary/40 cursor-not-allowed"
              : "bg-primary/90 hover:bg-primary cursor-pointer"
          }`}
        >
          {isSubmitting ? "Your request will be sent..." : "Send"}
        </button>
      )}
    </form.Subscribe>
  );
}

type Props = {
  form: any;
  token?: string | null; // Optional token for reCAPTCHA
};
