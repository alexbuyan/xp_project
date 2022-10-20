import { useState } from "react";
import styles from "./Home.module.scss";
import axios from "axios";

type TaskInterface = {
  name: string;
  status: string;
  deadline: number;
};

async function assignTaskToUser(
  login: string,
  name: string,
  status: string,
  deadline: number
) {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/user/task/add?login=${login}&task_name=${name}&task_status=${status}&task_deadline=${deadline}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

async function getTasks(login: string) {
  try {
    const { data } = await axios.post(
      `http://0.0.0.0:8000/user/tasks?login=${login}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export default function Home() {
  let login = localStorage.getItem("login");
  if (login === null) {
    login = "";
  }
  const [todos, setTodos] = useState<TaskInterface[]>([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [deadlineStr, setDeadlineStr] = useState("");

  const addTodo = async () => {
    if (name !== "" && status !== "" && deadlineStr !== "") {
      let deadline = parseInt(deadlineStr);
      let login = localStorage.getItem("login");
      if (login === null) {
        login = "";
      }
      let newTodo = await assignTaskToUser(login, name, status, deadline);
      console.log(newTodo);
      setTodos([...todos, newTodo]);
      setName("");
      setStatus("");
      setDeadlineStr("");
    }
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Список задач</h1>
      <div className={styles.addTask}>
        <input
          className={styles.addInput}
          type="text"
          placeholder="Новая задача"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className={styles.addInput}
          type="text"
          placeholder="Статус"
          name="status"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />
        <input
          className={styles.addInput}
          type="text"
          placeholder="Дедлайн"
          name="deadline"
          value={deadlineStr}
          onChange={(e) => {
            setDeadlineStr(e.target.value);
          }}
        />
        <button className={styles.addButton} onClick={addTodo}>
          Добавить
        </button>
      </div>
      <div className={styles.separator} />
      {todos?.length > 0 ? (
        <ul className={styles.todoList}>
          {todos.map((todo, index) =>
            todo ? (
              <li className={styles.todo} key={index}>
                <h1>{todo.name}</h1>
                <div className={styles.todoParams}>
                  <p>Статус: {todo.status}</p>
                  <p>Дедлайн: {todo.deadline}</p>
                </div>
              </li>
            ) : (
              <li key={index}></li>
            )
          )}
        </ul>
      ) : (
        <div className={styles.empty}>
          <p>Пока задач нет</p>
        </div>
      )}
    </div>
  );
}
