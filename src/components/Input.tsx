import { InputHTMLAttributes } from "react"

import styles from "./Input.module.css"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: IInputProps) {
  return (
    <input
      className={styles.input}
      type="text"
      {...rest}
    />
  )
}
