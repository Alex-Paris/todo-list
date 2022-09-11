import { MouseEvent } from 'react';

import { Todo } from './Todo';

import clipboardImg from '../assets/clipboard.svg';
import styles from "./TodoList.module.css"
import { ITodoDTO } from '../dtos/TodoDTO';

interface ITodoListProps {
  todos: ITodoDTO[];
  onCheckTodo: (description: string) => void;
  onDeleteTodo: (event: MouseEvent<HTMLButtonElement>, description: string) => void;
}

export function TodoList({ todos, onCheckTodo, onDeleteTodo }: ITodoListProps) {
  const amountTodosDone = todos.reduce((acc, curr) => {
    if (curr.done) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const doneTodosInfo = `${amountTodosDone} of ${todos.length}`;

  return (
    <div className={styles.todos}>
      <header className={styles.header}>
        <div>
          <h5 className={styles.createdTasks}>Created tasks</h5>
          <span>{todos.length}</span>
        </div>
        <div>
          <h5 className={styles.doneTasks}>Done</h5>
          <span>{doneTodosInfo}</span>
        </div>
      </header>

      {todos.length === 0 ? (
        <div className={styles.emptyList}>
          <img src={clipboardImg} />
          <h4>You don't have any created tasks</h4>
          <p>Create tasks and organize your to-do items</p>
        </div>
      ) : (
        <div className={styles.filledList}>
          {
            todos.map(todo => (
              <Todo
                key={todo.description}
                todo={todo}
                onCheckTodo={onCheckTodo}
                onDeleteTodo={onDeleteTodo}
              />
            ))
          }
        </div>
      )}

    </div>
  )
}
