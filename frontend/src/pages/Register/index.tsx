import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";

type CreateUser = {
  login: string;
  password: string;
};

async function addUserToApi(login: string, password: string) {
  try {
    const { data } = await axios.post<CreateUser>(
      "https://localhost:8000/user/add",
      { user_login: { login }, user_password: { password } },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

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

export default function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const addUser = () => {
    if (login !== "" && password !== "") {
      setLogin(login);
      setPassword(password);
      let data = addUserToApi(login, password);
      console.log(data);
      let path = "/";
      navigate(path);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="login"
          className={styles.inputLogin}
          name="login"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          className={styles.inputRegister}
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className={styles.registerButton} onClick={addUser}>
        Зарегистрироваться
      </button>
    </div>
  );
}
