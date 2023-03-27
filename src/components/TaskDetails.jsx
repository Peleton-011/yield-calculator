import { useState, useEffect } from "react";
import {
    useParams,
    Navigate,
    useNavigate,
    useLocation,
} from "react-router-dom";

import Button from "./Button";

function TaskDetails() {
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState({});
    const [error, setError] = useState(null);

    const params = useParams();
    const nav = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
            const data = await res.json();

            if (res.status === 404) {
                nav("/");
            }

            setTask(data);
            setLoading(false);
        };

        fetchTask();
    });

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <aside className="task-desc container">
            <header>
                <h3 className="name">{task.name}</h3>
                <p>
                    <span className="date">Date: </span>
                    {task.date}
                </p>
            </header>
            <p className="description">{task.description || "No description available for this task."}</p>
            <Button
                onClick={() => {
                    //Go back
                    nav(-1);
                }}
                text="Go Back"
                classList="btn-block"
            />
        </aside>
    );
}

export default TaskDetails;
