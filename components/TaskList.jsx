import TaskItem from './TaskItem';

export default function TaskList({tasks = []}) {
  return (
    <div>
      <h1>Tasks:</h1>
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}