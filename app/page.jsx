import TaskItem from '../components/TaskItem';
import TaskList from '../components/TaskList';
import './globals.css';

export default function Home() {
  return (
    <main>
      <TaskList task1={{ id: 1, text: 'Buy groceries', completed: false }} task2={{ id: 2, text: 'Walk the dog', completed: true }} />
    </main>
  );
}