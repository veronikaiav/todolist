import "./TaskForm.css";
import MyButton from '../ui/MyButton/MyButton.jsx';
import { useState } from "react";
import { newId } from "../../lib/id.js";

// TODO: Переименовать на TaskForm

export default function TaskForm({create}) {

    const [task, setTask] = useState({
        description: "",
    });

    function addNewTask(e) {
        e.preventDefault();

        if (!task.description) {
            return;
        }

        const newTask = {
            id: newId(),
            completed: false,
            ...task,
        }

        create(newTask);

        setTask({
            description: "",
        });

    }

    return (
        <div className='taskInput'>
            <input
                type="text"
                placeholder='Введите описание задачи...'
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
            <MyButton
                onClick={addNewTask}
            >
                Добавить
            </MyButton>
        </div>
    );
}