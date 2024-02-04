import { ComponentProps } from "react";
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { TrashSVG } from "./icons/Trash";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentProps<"li"> {
  description: string;
  isChecked: boolean;
  handleChangeCheckbox: () => void;
  handleClickButton: () => void;
}

export function Card({
  description,
  isChecked,
  handleChangeCheckbox,
  handleClickButton,
  ...rest
}: CardProps) {
  return (
    <li
      className="grid grid-cols-card items-start gap-3 w-full p-4 bg-gray-500 rounded-lg border border-gray-400 shadow-card"
      {...rest}
    >
      <Checkbox checked={isChecked} onChange={handleChangeCheckbox}>
        <p
          className={twMerge(
            "text-gray-100 text-sm",
            isChecked && "line-through text-gray-300"
          )}
        >
          {description}
        </p>
      </Checkbox>

      <Button onClick={handleClickButton} iconButton>
        <TrashSVG className="hover:text-danger" />
      </Button>
    </li>
  );
}
