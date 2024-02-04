import { ComponentProps, useRef } from "react";
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import { TrashSVG } from "./icons/Trash";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentProps<"li"> {
  description: string;
  isCompleted: boolean;
  handleChangeCheckbox: () => void;
  handleClickButton: () => void;
}

export function Card({
  description,
  isCompleted,
  handleChangeCheckbox,
  handleClickButton,
  ...rest
}: CardProps) {
  const itemListRef = useRef<HTMLLIElement>(null);

  const handleDeleteTask = () => {
    if (itemListRef.current) {
      itemListRef.current?.classList.add("animate-slideLeftToRight");

      itemListRef.current.addEventListener("animationend", () => {
        itemListRef.current?.classList.remove("animate-slideLeftToRight");

        handleClickButton();
      });
    }
  };

  return (
    <li
      className="animate-fadeInDown grid grid-cols-card items-start gap-3 w-full p-4 bg-gray-500 rounded-lg border border-gray-400 shadow-card"
      ref={itemListRef}
      {...rest}
    >
      <Checkbox checked={isCompleted} onChange={handleChangeCheckbox}>
        <p
          className={twMerge(
            "text-gray-100 text-sm",
            isCompleted && "line-through text-gray-300"
          )}
        >
          {description}
        </p>
      </Checkbox>

      <Button onClick={handleDeleteTask} iconButton>
        <TrashSVG className="hover:text-danger" />
      </Button>
    </li>
  );
}
