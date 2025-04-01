import "./TaskFilter.css";
import MyButton from "../ui/MyButton/MyButton";

export default function TaskFilter({ filter, setFilter }) {

    return (
        <div className="task-filter">
            <MyButton
                isActive={filter === "Все"}
                value="Все"
                onClick={e => setFilter(e.target.value)}
            >
                Все
            </MyButton>
            <MyButton
                isActive={filter === "Активные"}
                value="Активные"
                onClick={e => setFilter(e.target.value)}
            >
                Активные
            </MyButton>
            <MyButton
                isActive={filter === "Выполненные"}
                value="Выполненные"
                onClick={e => setFilter(e.target.value)}
            >
                Выполненные
            </MyButton>
        </div>
    );
}