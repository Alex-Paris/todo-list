import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Input } from './Input'
import { Button } from './Button'

import logoImg from '../assets/logo.svg'
import plusImg from '../assets/plus.svg'
import styles from "./Header.module.css"

export function Header() {
  const [newTask, setNewTask] = useState('');

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    alert(newTask)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Required field');
  }

  return (
    <header className={styles.header}>
      <img src={logoImg} alt="ToDo List logo" />

      <form onSubmit={handleAddNewTask}>
        <Input
          placeholder='Add a new task'
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <Button description='Create' icon={plusImg} />
      </form>
    </header>
  )
}
