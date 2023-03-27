import React from "react";

import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.name}{" "}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.date}</p>
            <Link to={`/task/${task.id}`}>View details</Link>
        </div>
    );
};

export default Task;
