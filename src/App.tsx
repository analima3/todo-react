import { LogoSVG } from "./components/icons/Logo";
import { useData } from "./hooks/useData";
import { Task } from "./global";
import { Card } from "./components/Card";
import { ChangeEvent, FormEvent } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { CirclePlusSVG } from "./components/icons/CirclePlus";
import { Budge } from "./components/Budge";
import { EmptyList } from "./components/EmptyList";

export default function App() {
  const {
    data,
    newTask,
    handleInputChange,
    handleSelectedTask,
    handleDeleteTask,
    handleNewTask,
  } = useData();

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    handleNewTask(newTask);
  };

  return (
    <div className="h-screen w-full overflow-x-hidden bg-gray-600">
      <header className="bg-gray-700 w-full h-52 grid place-content-center">
        <LogoSVG />
      </header>

      <main className="container relative p-4 md:mx-auto md:w-2/3">
        <section className="absolute -top-6 left-0 right-0 bg-blue-500 h-16">
          <form className="grid grid-cols-form gap-2" onSubmit={handleSubmit}>
            <Input
              value={newTask}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(evt)
              }
            />
            <Button type="submit">
              <span className="font-bold text-sm">Criar</span>
              <CirclePlusSVG />
            </Button>
          </form>
        </section>

        <section className="mt-16">
          <header className="flex justify-between mb-6 select-none">
            <span className="flex gap-2 text-sm font-bold text-blue">
              Tarefas criadas <Budge>{data.createdTasks}</Budge>
            </span>
            <span className="flex gap-2 text-sm font-bold text-purple">
              Concluídas
              <Budge>{`${data.completedTasks} de ${data.createdTasks}`}</Budge>
            </span>
          </header>

          <main>
            {!data.tasks.length && <EmptyList isEmpty={!data.tasks.length} />}

            <ul className="flex flex-col gap-3">
              {data.tasks.map((task: Task) => (
                <Card
                  key={task.id}
                  description={task.description}
                  isChecked={task.isChecked}
                  handleChangeCheckbox={() => handleSelectedTask(task)}
                  handleClickButton={() => handleDeleteTask(task)}
                />
              ))}
            </ul>
          </main>
        </section>
      </main>
    </div>
  );
}
