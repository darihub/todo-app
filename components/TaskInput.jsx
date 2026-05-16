import { useState } from 'react';

export default function TaskInput( {onAdd }) {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Add a new task</h2>
      <input type="text" 
        placeholder="Enter task title" 
        value={text}
        onChange={(e) => setText(e.target.value)} 
        /* e: evento, e.target: input, e.target.value: valor del input (texto actual escrito) */
      />
      <button onClick={() => onAdd(text)}>Add Task</button>
    </div>
  );
}