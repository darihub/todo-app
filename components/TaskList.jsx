export default function TaskList({ task1, task2 }) {
  return (
    <div>
      <h1>My To-Do List</h1>
      <TaskItem task={task1} />
      <TaskItem task={task2} />
    </div>
  );
}