import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ className, onChange, value, ...rest }: InputProps) {
  const defaultStyles =
    "w-full p-3 bg-gray-500 text-gray-100 text-base outline-none";
  const placeholderStyles =
    "placeholder:text-base md:indent-4 placeholder:text-gray-300";
  const actionsStyles =
    "ring-brightness duration-300 focus:ring-1 focus:ring-purple-dark rounded-lg hover:brightness-90";

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Adicione uma nova tarefa"
      className={twMerge(
        defaultStyles,
        placeholderStyles,
        actionsStyles,
        className
      )}
      {...rest}
    />
  );
}
