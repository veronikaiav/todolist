import "./TasksList.css";
import TaskListItem from "./TaskListItem.jsx";

export default function TaskList({ tasks, remove, update }) {
    return (
        <>
            <ul>
                {tasks.map((task) =>
                    <TaskListItem
                        key={task.id}
                        task={task}
                        remove={remove}
                        update={update}
                    />
                )}
            </ul>

        </>
    );
}