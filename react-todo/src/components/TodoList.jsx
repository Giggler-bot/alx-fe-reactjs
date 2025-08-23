import React from "react";

export default function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Read a book", completed: false }
  ]);
  const [text, setText] = React.useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: text.trim(), completed: false }]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 560 }}>
      <h2>Todo List</h2>
      <form onSubmit={addTodo}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New todo" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(t => (
          <li key={t.id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span
              onClick={() => toggleTodo(t.id)}
              style={{ textDecoration: t.completed ? "line-through" : "none", cursor: "pointer" }}
              data-testid={`todo-text-${t.id}`}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)} aria-label={`delete-${t.id}`}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
