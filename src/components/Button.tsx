import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  iconButton?: boolean;
}

export function Button({
  onClick,
  children,
  iconButton = false,
  ...rest
}: ButtonProps) {
  const buttonDefaultStyles =
    "rounded-lg flex justify-center items-center gap-2 transition-colors duration-300";

  return (
    <button
      onClick={onClick}
      className={twMerge(
        buttonDefaultStyles,
        iconButton
          ? "p-1 text-gray-300 hover:bg-gray-400"
          : "p-3 bg-blue-dark text-gray-100 hover:bg-blue"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
