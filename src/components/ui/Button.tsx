import { Button } from "@headlessui/react";

export default function CustomButton({ label, disabled, type, onClick}: { label: string, disabled?: boolean, type?: "button" | "submit" | "reset", onClick?: () => void}) {
  return (
    <Button
      className="w-fit rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 mt-3"
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
