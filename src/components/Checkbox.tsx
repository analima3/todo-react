import { ComponentProps } from "react";
import { CheckboxSVG } from "./icons/Checkbox";

interface CheckboxProps extends ComponentProps<"input"> {
  onChange(): void;
}

export function Checkbox({ checked, children, onChange }: CheckboxProps) {
  return (
    <label className="w-min flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />

      {checked ? (
        <CheckboxSVG.CheckboxChecked className="hover:brightness-125" />
      ) : (
        <CheckboxSVG.Checkbox className="text-transparent hover:text-blue-dark hover:brightness-75" />
      )}

      {children}
    </label>
  );
}
