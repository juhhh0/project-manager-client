import { Field, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";

type Props = {
  label: string;
  name: string;
  value?: string;
};

const CustomTextArea: React.FC<Props> = ({ label, name, value }) => {
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label className="text-sm/6 font-medium text-white">{label}</Label>
        <Textarea
          defaultValue={value}
          name={name}
          className={clsx(
            "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          rows={3}
        />
      </Field>
    </div>
  );
};

export default CustomTextArea;
