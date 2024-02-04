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

  const createRandomId = () => Math.round(Math.random() * 1000);

  function handleNewTask(description: string) {
    if (newTask.trim() !== "") {
      const newTask: Task = {
        id: createRandomId(),
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

  function handleStatusTask(task: Task) {
    if (task) {
      const tasksAfterChangeStatus = handleCheckedStateTask(task);

      setData(({ createdTasks }) => ({
        tasks: tasksAfterChangeStatus,
        createdTasks: createdTasks,
        completedTasks: tasksAfterChangeStatus.filter(
          (task) => task.isCompleted
        ).length,
      }));
    }
  }

  function handleCheckedStateTask(selectedTask: Task): Task[] {
    if (selectedTask.isCompleted) {
      const newPos = data.tasks.findIndex((task) => task.isCompleted);
      const currentPos = data.tasks.findIndex(
        (task) => task.id === selectedTask.id
      );

      if (newPos !== -1 && currentPos !== -1) {
        return changePositionTask(newPos, currentPos);
      }
    }

    const newOrderedTasks = data.tasks.filter(
      (task) => task.id !== selectedTask.id
    );

    return [...newOrderedTasks, { ...selectedTask, isCompleted: true }];
  }

  function changePositionTask(newPos: number, currentPos: number) {
    const newTasksOrderTasks = [...data.tasks];

    [newTasksOrderTasks[currentPos], newTasksOrderTasks[newPos]] = [
      newTasksOrderTasks[newPos],
      { ...newTasksOrderTasks[currentPos], isCompleted: false },
    ];

    return [...newTasksOrderTasks];
  }

  function handleDeleteTask(selectedTask: Task) {
    setData(({ tasks }) => {
      const tasksAfterDelete = tasks.filter(
        (task) => task.id !== selectedTask.id
      );

      return {
        tasks: tasksAfterDelete,
        createdTasks: tasksAfterDelete.length,
        completedTasks: tasksAfterDelete.filter((task) => task.isCompleted)
          .length,
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
