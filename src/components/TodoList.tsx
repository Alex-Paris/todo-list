import styles from "./TodoList.module.css"

interface ITodoListProps {}

export function TodoList({}: ITodoListProps) {
  return (
    <div className={styles.todos}>
      <header className={styles.header}>
        <h5 className={styles.createdTasks}>Created tasks</h5>
        <h5 className={styles.doneTasks}>Done</h5>
      </header>
    </div>
  )
}
