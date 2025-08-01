export default function ProgressBar({ currentStep, totalSteps }: Props) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-muted/20 h-2 rounded-lg">
      <div
        className="bg-primary h-2 rounded-lg transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

type Props = {
  currentStep: number;
  totalSteps: number;
};
