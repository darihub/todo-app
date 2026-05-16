import TaskItem from './TaskItem';

export default function TaskList({tasks = []}) {
  return (
    <div>
      <h1>My To-Do List</h1>
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}