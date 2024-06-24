import { Button } from "@headlessui/react";

export default function CustomButton({ label, disabled, type, onClick, className}: { label: string, disabled?: boolean, type?: "button" | "submit" | "reset", onClick?: () => void, className?: string}) {
  return (
    <Button
      className={`w-fit rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 ${className}`}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
