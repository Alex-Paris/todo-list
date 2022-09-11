import { Todo } from './Todo';

import clipboardImg from '../assets/clipboard.svg';
import styles from "./TodoList.module.css"

interface ITodoListProps {}

export function TodoList({}: ITodoListProps) {
  return (
    <div className={styles.todos}>
      <header className={styles.header}>
        <div>
          <h5 className={styles.createdTasks}>Created tasks</h5>
          <span>4</span>
        </div>
        <div>
          <h5 className={styles.doneTasks}>Done</h5>
          <span>4</span>
        </div>
      </header>

      {false ? (
        <div className={styles.emptyList}>
          <img src={clipboardImg} />
          <h4>You don't have any created tasks</h4>
          <p>Create tasks and organize your to-do items</p>
        </div>
      ) : (
        <div className={styles.filledList}>
          <Todo />
        </div>
      )}

    </div>
  )
}
