"use client";

import TaskItem from '../components/TaskItem';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import { useState } from 'react';
import './globals.css';

export default function Home() {

  function addTask({text}) {
  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };
  setTasks([...tasks, newTask]);
  }

  const [tasks, setTasks] = useState([]);
  return (
    <main>
    <h1>My To-Do List</h1>
    <TaskInput onAdd={addTask} />
    <TaskList tasks={tasks} />
    </main>
  );
}