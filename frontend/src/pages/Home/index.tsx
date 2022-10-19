import styles from "./Home.module.scss";

export default function index() {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Список задач</h1>
    </div>
  );
}
