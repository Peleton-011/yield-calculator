import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([]);

    //Get tasks from server with fetchTasks
    useEffect(
        () => {
            const getTasks = async () => {
                const tasksFromServer = await fetchTasks();
                setTasks(tasksFromServer);
            };

            getTasks();
        },
        /*Dependency array */ []
    );

    //Fetch the tasks
    const fetchTasks = async () => {
        //res => response
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();

        return data;
    };

    //Fetch a singular task from server
    const fetchTask = async (id) => {
        //res => response
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        return data;
    };

    //Post task to server
    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });

        const data = await res.json();

        setTasks([...tasks, data]);
        /*
        const id = Math.floor(Math.random() * 1000) + 1;

        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
*/
    };

    //Delete Task from the server
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

        setTasks(tasks.filter((task) => task.id !== id));
    };

    //Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);

        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updTask),
        });

        const data = await res.json();
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        );
    };

    return (
        <Router>
            <div className="container">
                <Header
                    title="Task Tracker"
                    onAdd={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {showAddTask && (
                                    <AddTask
                                        onAdd={addTask}
                                        setShowAdd={setShowAddTask}
                                    />
                                )}
                                {tasks.length > 0 ? (
                                    <Tasks
                                        tasks={tasks}
                                        setTasks={setTasks}
                                        onDelete={deleteTask}
                                        onToggle={toggleReminder}
                                    />
                                ) : (
                                    "No tasks yet..."
                                )}
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/task/:id" element={<TaskDetails />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
