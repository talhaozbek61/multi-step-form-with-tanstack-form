import { ArrowLeft } from "lucide-react";

export default function BackButton({ step, setStep }: BackButtonProps) {
  return (
    <button
      onClick={() => setStep(step - 1)}
      type="button"
      className="bg-primary px-4 py-2 text-white text-xs font-bold flex items-center gap-2 transition-all hover:scale-95 duration-300 outline-none cursor-pointer rounded-full shadow-sm"
    >
      <ArrowLeft className="size-4 sm:size-3.5" />
      <span>Back</span>
    </button>
  );
}

type BackButtonProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
