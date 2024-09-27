import React, { useState } from "react";
import './Body.css'; // Assuming this is your CSS file

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [priority, setPriority] = useState("Low");
    const [dueDate, setDueDate] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() === '' || dueDate === '') return;

        const task = {
            id: Date.now(),
            text: newTask,
            completed: false,
            priority,
            dueDate,
        };
        setTasks([...tasks, task]);
        setNewTask("");
        setPriority("Low");
        setDueDate("");
    };

    // Delete task
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle task completion
    const handleCompleteTask = (id) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Check if the task is overdue
    const isOverdue = (dueDate) => {
        const today = new Date();
        const taskDueDate = new Date(dueDate);
        return taskDueDate < today && !taskDueDate.completed;
    };

    return (
        <div className='todo-container'>
            <h1>To Do List</h1>

            {/* Add task section */}
            <div className='add-task'>
                <input
                    type='text'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder='Add a task...'
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            {/* Task list section */}
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={`task-item ${task.completed ? "completed" : ""} ${isOverdue(task.dueDate) ? "overdue" : ""}`}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCompleteTask(task.id)}
                        />
                        <span className="task-text">{task.text}</span>
                        <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                        <span className="due-date">Due: {task.dueDate}</span>
                        {isOverdue(task.dueDate) && <span className="overdue-label">Overdue</span>}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
