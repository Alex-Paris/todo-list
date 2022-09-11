import { ImRadioUnchecked } from 'react-icons/im';
import { HiCheckCircle } from 'react-icons/hi';
import { TbTrash } from 'react-icons/tb';

import styles from "./Todo.module.css"

interface ITodoProps {}

export function Todo({}: ITodoProps) {
  return (
    <div className={styles.todo}>
      <div className={false ? styles.undone : styles.done}>
        {true ? (
          <ImRadioUnchecked className={styles.unchecked} size={24} />
        ) : (
          <HiCheckCircle className={styles.checked} size={24} />
        )}
        <p>este eh um texto muito grande para ser exibido dentro da div, propositalmente é claro para que haja quebra de linha</p>
        <TbTrash className={styles.trash} size={24} />
      </div>
    </div>
  )
}
