import emptyListPNG from "/board-empty-list.png";
import { twMerge } from "tailwind-merge";

export function EmptyList({ isEmpty }: { isEmpty: boolean }) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center gap-4 py-8 md:py-16",
        isEmpty && "border-t border-solid border-gray-400 rounded-lg"
      )}
    >
      <img src={emptyListPNG} />
      <div className="text-gray-300 text-center leading-6">
        <h1 className="font-bold">Você ainda não tem tarefas cadastradas</h1>
        <h2>Crie tarefas e organize seus itens a fazer</h2>
      </div>
    </div>
  );
}
