import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";
import AddTask from "./components/AddTask";

import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

    const data = [];
    const showForm = false;

    return (
        <Router>
            <div className="container">
                <Header
                    title="Sample"
                    onAdd={() => {"a"}}
                    showAdd={showForm}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {showForm && (
                                    <AddTask
                                        onAdd={() => {"a"}}
                                        setShowAdd={() => {"a"}}
                                    />
                                )}
                                {data.length > 0 ? (
                                    <Tasks
                                        tasks={data}
                                        setTasks={() => {"a"}}
                                        onDelete={() => {"a"}}
                                        onToggle={() => {"a"}}
                                    />
                                ) : (
                                    "No data yet..."
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
