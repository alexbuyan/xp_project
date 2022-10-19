import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";

export default function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const addUser = () => {
    if (login !== "" && password !== "") {
      setLogin(login);
      setPassword(password);
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
