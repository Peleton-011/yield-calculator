import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import GenericInput from "./GenericInput";
import TextArea from "./TextArea";

const AddTask = ({ onAdd, setShowAdd }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);
    const [description, setDescription] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            //To-Do: improve
            alert("Please enter a task");
            return;
        }

        onAdd({ name, date, reminder, description});

        setName("");
        setDate("");
        setReminder(false);
        setDescription("")

        setShowAdd(false);
    };

    //To-Do: Find better semantics for this...
    return (
        <aside className="modal container">
            <header>
                <h3>New Task</h3>
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => setShowAdd(false)}
                />
            </header>
            <form className="add-form" onSubmit={onSubmit}>
                <GenericInput
                    inputId="task-name"
                    inputLabel="Task"
                    inputType="text"
                    inputPlaceholder="Add Task Name"
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                />
                <GenericInput
                    inputId="task-date"
                    inputLabel="Day & Time"
                    inputType="text"
                    inputPlaceholder="Add Day & Time"
                    onChange={(e) => setDate(e.target.value)}
                />
                <TextArea
                    inputId="task-description"
                    inputLabel="Description"
                    rows={4}
                    maxLen={480}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <GenericInput
                    inputClass="form-control-check"
                    inputId="task-reminder"
                    inputLabel="Set Reminder"
                    inputType="checkbox"
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
                <input
                    className="btn btn-block"
                    type="submit"
                    value="Save Task"
                />
            </form>
        </aside>
    );
};

export default AddTask;
