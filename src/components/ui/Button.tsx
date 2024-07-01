import { Button } from "@headlessui/react";

type Props = {
  label: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  color?: "blue" | "red";
};

const CustomButton: React.FC<Props> = ({
  label,
  disabled,
  type,
  onClick,
  className,
  color,
}) => {
  return (
    <Button
      className={`w-fit rounded-full py-2 px-4 text-sm text-white ${
        color == "red"
          ? "bg-red-600 data-[hover]:bg-red-500 data-[active]:bg-red-700"
          : "bg-gray-500 data-[hover]:bg-gray-400 data-[active]:bg-sky-700"
      } ${className}`}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
