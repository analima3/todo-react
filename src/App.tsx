import { LogoSVG } from "./components/icons/Logo";
import { Budge } from "./components/Budge";
import { useData } from "./hooks/useData";
import { EmptyList } from "./components/EmptyList";
import { Task } from "./global";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./components/Button";
import { CirclePlusSVG } from "./components/icons/CirclePlus";

export default function App() {
  const { data, addNewTask, handleSelectedTask, handleDeleteTask } = useData();

  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (newTask.length) {
      addNewTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="h-screen w-full overflow-x-hidden bg-gray-600">
      <header className="bg-gray-700 w-full h-52 grid place-content-center">
        <LogoSVG />
      </header>

      <main className="container p-4 md:mx-auto md:w-2/3">
        <div className="relative">
          <div className="absolute -top-[6.5rem] left-0 right-0 bg-blue-500 h-16">
            <form className="grid grid-cols-form gap-2" onSubmit={handleSubmit}>
              <Input
                value={newTask}
                onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                  setNewTask(evt.target.value)
                }
              />
              <Button type="submit">
                <span className="font-bold text-sm">Criar</span>
                <CirclePlusSVG />
              </Button>
            </form>
          </div>

          <div className="mt-16">
            <section className="flex justify-between mb-6 select-none">
              <span className="flex gap-2 text-sm font-bold text-blue">
                Tarefas criadas <Budge>{data.createdTasks}</Budge>
              </span>
              <span className="flex gap-2 text-sm font-bold text-purple">
                Concluídas
                <Budge>{`${data.completedTasks} de ${data.createdTasks}`}</Budge>
              </span>
            </section>

            <section className="flex flex-col gap-3">
              {!data.tasks.length && <EmptyList isEmpty={!data.tasks.length} />}

              {data.tasks.map((task: Task) => (
                <Card
                  key={task.id}
                  description={task.description}
                  isChecked={task.isChecked}
                  handleChangeCheckbox={() => handleSelectedTask(task)}
                  handleClickButton={() => handleDeleteTask(task)}
                />
              ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
