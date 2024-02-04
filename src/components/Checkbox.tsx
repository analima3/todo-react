import { ComponentProps } from "react";
import { CheckboxSVG } from "./icons/Checkbox";

interface CheckboxProps extends ComponentProps<"input"> {}

export function Checkbox({ checked, children }: CheckboxProps) {
  return (
    <label className="w-full flex items-center gap-3 cursor-pointer select-none">
      <input type="checkbox" className="hidden" checked={checked} />

      {checked ? (
        <CheckboxSVG.CheckboxChecked className="hover:brightness-125" />
      ) : (
        <CheckboxSVG.Checkbox className="text-transparent hover:text-blue-dark hover:brightness-75" />
      )}

      {children}
    </label>
  );
}
