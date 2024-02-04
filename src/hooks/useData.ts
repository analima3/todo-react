import { useState } from "react";
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

  function addNewTask(description: string) {
    const newTask = {
      id: Math.round(Math.random() * 1000),
      description,
      isChecked: false,
    };

    setData(({ tasks, completedTasks, createdTasks }) => ({
      tasks: [newTask, ...tasks],
      createdTasks: createdTasks + 1,
      completedTasks: completedTasks,
    }));
  }

  function handleSelectedTask(task: Task) {
    if (task) {
      const tasksHaveCheged = handleCheckedStateTask(task);

      setData(({ createdTasks }) => ({
        tasks: tasksHaveCheged,
        createdTasks: createdTasks,
        completedTasks: tasksHaveCheged.filter((task) => task.isChecked).length,
      }));
    }
  }

  function handleCheckedStateTask(selectedTask: Task): Task[] {
    if (selectedTask.isChecked) {
      const newPos = data.tasks.findIndex((task) => task.isChecked);
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

    return [...newOrderedTasks, { ...selectedTask, isChecked: true }];
  }

  function changePositionTask(newPos: number, currentPos: number) {
    const newTasksOrderTasks = [...data.tasks];

    [newTasksOrderTasks[currentPos], newTasksOrderTasks[newPos]] = [
      newTasksOrderTasks[newPos],
      { ...newTasksOrderTasks[currentPos], isChecked: false },
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
        completedTasks: tasksAfterDelete.filter((task) => task.isChecked)
          .length,
      };
    });
  }

  return { data, addNewTask, handleSelectedTask, handleDeleteTask };
};
