"use client";

export default function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-lg border px-[17px] py-[9px] font-sans text-[12.5px] transition-all ${
        active
          ? "border-ember bg-ember text-paper"
          : "border-sand-deep bg-transparent text-bark hover:border-ember hover:text-ember"
      }`}
    >
      {label}
    </button>
  );
}
