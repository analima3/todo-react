import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Budge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-gray-400 py-[2px] px-2 text-gray-200 text-xs font-bold">
      {children}
    </span>
  );
}
