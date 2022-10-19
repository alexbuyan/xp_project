import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function index() {
  return (
    <div className={styles.body}>
      <Link to="/" className={styles.link}>
        Главная
      </Link>
      <Link to="/register" className={styles.link}>
        Регистрация
      </Link>
    </div>
  );
}
