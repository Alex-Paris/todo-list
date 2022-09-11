import { MouseEvent } from 'react';
import { ImRadioUnchecked } from 'react-icons/im';
import { HiCheckCircle } from 'react-icons/hi';
import { TbTrash } from 'react-icons/tb';

import { ITodoDTO } from '../dtos/TodoDTO';

import styles from "./Todo.module.css"

interface ITodoProps {
  todo: ITodoDTO;
  onCheckTodo: (description: string) => void;
  onDeleteTodo: (event: MouseEvent<HTMLButtonElement>, description: string) => void;
}

export function Todo({ todo, onCheckTodo, onDeleteTodo }: ITodoProps) {
  return (
    <a
      className={styles.todo}
      onClick={() => onCheckTodo(todo.description)}
    >
      <div className={!todo.done ? styles.undone : styles.done}>
        {!todo.done ? (
          <ImRadioUnchecked className={styles.unchecked} size={24} />
        ) : (
          <HiCheckCircle className={styles.checked} size={24} />
        )}

        <p>{todo.description}</p>

        <button onClick={(e) => onDeleteTodo(e, todo.description)}>
          <TbTrash
            className={styles.trash}
            size={24}
          />
        </button>
      </div>
    </a>
  )
}
