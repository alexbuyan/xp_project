import React from "react";
import styles from "./Register.module.scss";

export default function index() {
  return (
    <div className={styles.body}>
      <div className={styles.inputs}>
        <input type="text" placeholder="login" className={styles.inputLogin} />
        <input
          type="text"
          placeholder="register"
          className={styles.inputRegister}
        />
      </div>
      <button className={styles.registerButton}>Зарегистрироваться</button>
    </div>
  );
}
