import { useState } from "react";
import styles from "./Home.module.scss";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Список задач</h1>
      <div className={styles.addTask}>
        <input
          type="text"
          placeholder="Новая задача"
          name="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className={styles.addButton} onClick={addTodo}>
          Добавить
        </button>
      </div>
      <div className={styles.separator} />
      {todos?.length > 0 ? (
        <ul className={styles.todoList}>
          {todos.map((todo, index) => (
            <li className={styles.todo} key={index}>
              {todo}
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <p>Пока задач нет</p>
        </div>
      )}
    </div>
  );
}
