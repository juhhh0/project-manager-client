import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

type Props = {
  name: string;
  label: string;
  description?: string;
  type: string;
  className?: string;
  value?: string
};

const CustomInput: React.FC<Props> = ({
  name,
  label,
  description,
  type,
  className,
  value
}) => {
  return (
    <div className={`w-full max-w-md ${className}`}>
      <Field>
        <Label className="text-sm/6 font-medium text-white">{label}</Label>
        <Description className="text-sm/6 text-white/50">
          {description}
        </Description>
        <Input
          className={clsx(
            "mt-2 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          type={type}
          defaultValue={value}
          name={name}
        />
      </Field>
    </div>
  );
};

export default CustomInput;
