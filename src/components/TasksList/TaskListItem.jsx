import { useState } from "react";
import MyBytton from "../ui/MyButton/MyButton.jsx";

export default function TaskListItem(props) {

    return (
        <li
            className="list-item"
        >
            <span>
                <input type="checkbox" checked={props.task.completed} onChange={() => props.update(props.task.id)} />
                <span className={props.task.completed ? "checked" : null}>{props.task.description}</span>
            </span>
            <MyBytton onClick={() => props.remove(props.task)}>Удалить</MyBytton>
        </li>
    );
}