export default function TaskItem({task: {id, text, completed }}) {
  return (
    <div>
      <h3>{text}</h3>
      <p>{completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
}