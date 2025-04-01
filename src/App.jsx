import { useState, useEffect, useMemo } from 'react'
import TaskList from './components/TasksList/TaskList.jsx';
import TaskForm from './components/TaskForm/TaskForm.jsx';
import TaskFilter from './components/TaskFilter/TaskFilter.jsx';
import { newId } from "./lib/id.js";

export default function App() {

  const [filter, setFilter] = useState("Все");
  const [tasks, setTasks] = useState([
    { id: newId(), description: "Добавить задачу", completed: true },
    { id: newId(), description: "Удалить задачу", completed: false },
    { id: newId(), description: "Купить хлеб", completed: false },
  ]);

  /* 
  Запускается при первоначальном рендере, тк в зависимостях пустой массив.
  */

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    setTasks(tasks);
  }, []);

  /*
  Запускается при каждом изменении tasks, для обновления localStorage
  */

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  function createNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function updateCompleted(taskId) {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t))
  }

  function removeTask(task) {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  function filterTasks() {
    switch (filter) {
      case "Все":
        return tasks;
      case "Активные":
        return tasks.filter(t => t.completed === false);
      case "Выполненные":
        return tasks.filter(t => t.completed === true);
    }
  }

  const filteredTasks = filterTasks();

  return (
    <>
      <TaskForm create={createNewTask} />
      <h1>Список задач:</h1>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} remove={removeTask} update={updateCompleted} />
    </>
  );
}