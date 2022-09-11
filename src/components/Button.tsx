import { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  description: string;
  icon?: string;
}

export function Button({ description, icon, ...rest }: IButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      {description}
      {icon && <img src={icon} />}
    </button>
  )
}
