import type { Data } from "./+data";
import { useState } from "react";
import { useData } from "vike-react/useData";

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

export function TodoList() {
  const { todoItemsInitial } = useData<Data>();
  const [todoItems, setTodoItems] = useState<TodoItem[]>(todoItemsInitial);
  const [newTodo, setNewTodo] = useState("");
  const trimmedTodo = newTodo.trim();

  const addTodo = () => {
    if (!trimmedTodo) return;

    setTodoItems((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        text: trimmedTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodoItems((prev) =>
      prev.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, completed: !todoItem.completed } : todoItem,
      ),
    );
  };

  const removeTodo = (id: string) => {
    setTodoItems((prev) => prev.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <div style={{ maxWidth: 520 }}>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
        {todoItems.length === 0 ? (
          <li style={{ color: "#666", fontStyle: "italic" }}>No to-dos yet. Add one above.</li>
        ) : (
          todoItems.map((todoItem) => (
            <li
              key={todoItem.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  cursor: "pointer",
                  flex: 1,
                }}
              >
                <input
                  type="checkbox"
                  checked={todoItem.completed}
                  onChange={() => toggleTodo(todoItem.id)}
                  aria-label={`Mark ${todoItem.text} as complete`}
                />
                <span
                  style={{
                    textDecoration: todoItem.completed ? "line-through" : "none",
                    color: todoItem.completed ? "#6b7280" : "#111827",
                  }}
                >
                  {todoItem.text}
                </span>
              </label>
              <button type="button" onClick={() => removeTodo(todoItem.id)} aria-label={`Remove ${todoItem.text}`}>
                Remove
              </button>
            </li>
          ))
        )}
      </ul>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          addTodo();
        }}
        style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        <input
          type="text"
          aria-label="New to-do"
          value={newTodo}
          onChange={(ev) => setNewTodo(ev.target.value)}
          placeholder="Add a new trip item"
          style={{ flex: 1, minWidth: 180, padding: "10px 12px" }}
          required
        />
        <button type="submit" disabled={!trimmedTodo}>
          Add to-do
        </button>
      </form>
    </div>
  );
}
