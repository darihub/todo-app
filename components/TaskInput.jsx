import TaskItem from './TaskItem';
import TaskList from './TaskList';

export default function TaskInput(onAdd) {
  return (
    <div>
      <h2>Add a new task</h2>
      <input type="text" placeholder="Enter task title" />
      <button onClick={() => onAdd(type)}>Add Task</button>
    </div>
  );
}