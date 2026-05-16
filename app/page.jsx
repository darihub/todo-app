"use client";

import TaskItem from '../components/TaskItem';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import { useState } from 'react';
import './globals.css';

function addTask(text) {
  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };
  setTasks([...tasks, newTask]);
  }

export default function Home() {
  const [tasks, setTasks] = useState([]);
  return (
    <main>
    <h1>My To-Do List</h1>
    <TaskInput onAdd={addTask} />
    <TaskList tasks={tasks} />
    </main>
  );
}