import { ChangeEvent, useState } from "react";
import { Task } from "../global";

interface Data {
  tasks: Task[];
  completedTasks: number;
  createdTasks: number;
}

const initialValues = {
  tasks: [],
  completedTasks: 0,
  createdTasks: 0,
};

export const useData = () => {
  const [data, setData] = useState<Data>(initialValues);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewTask(evt.target.value);
  };

  function handleNewTask(description: string) {
    if (description.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        description,
        isCompleted: false,
      };

      setData(({ tasks, createdTasks, completedTasks }) => ({
        tasks: [newTask, ...tasks],
        createdTasks: createdTasks + 1,
        completedTasks: completedTasks,
      }));

      setNewTask("");
    }
  }

  function handleStatusTask(selectedTask: Task) {
    if (selectedTask) {
      const updatedTasks = !selectedTask.isCompleted
        ? handleCompletedTask(selectedTask)
        : handleUncompletedTask(selectedTask);

      setData(({ createdTasks }) => {
        const completedTasks = updatedTasks.filter(
          (task) => task.isCompleted
        ).length;

        return {
          tasks: updatedTasks,
          createdTasks: createdTasks,
          completedTasks,
        };
      });
    }
  }

  function handleCompletedTask(selectedTask: Task): Task[] {
    const newOrderedTasks = data.tasks.filter(
      (task) => task.id !== selectedTask.id
    );

    return [...newOrderedTasks, { ...selectedTask, isCompleted: true }];
  }

  function handleUncompletedTask(selectedTask: Task): Task[] {
    const newPos = data.tasks.findIndex((task) => task.isCompleted);
    const currentPos = data.tasks.findIndex(
      (task) => task.id === selectedTask.id
    );

    if (newPos !== -1 && currentPos !== -1) {
      const newTasksOrderTasks = [...data.tasks];

      [newTasksOrderTasks[currentPos], newTasksOrderTasks[newPos]] = [
        newTasksOrderTasks[newPos],
        { ...newTasksOrderTasks[currentPos], isCompleted: false },
      ];

      return [...newTasksOrderTasks];
    }

    return data.tasks;
  }

  function handleDeleteTask(selectedTask: Task) {
    const tasksAfterDelete = data.tasks.filter(
      (task) => task.id !== selectedTask.id
    );

    setData(() => {
      const completedTasks = tasksAfterDelete.filter(
        (task) => task.isCompleted
      ).length;

      return {
        tasks: tasksAfterDelete,
        createdTasks: tasksAfterDelete.length,
        completedTasks,
      };
    });
  }

  return {
    data,
    newTask,
    handleInputChange,
    handleNewTask,
    handleStatusTask,
    handleDeleteTask,
  };
};
