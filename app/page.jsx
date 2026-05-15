import TaskItem from '../components/TaskItem';
import './globals.css';

export default function Home() {
  return (
    <main>
      <h1>My To-Do List</h1>
      <TaskItem task={{ id: 1, text: 'Buy groceries', completed: false }} />
      <TaskItem task={{ id: 2, text: 'Walk the dog', completed: true }} />
    </main>
  );
}