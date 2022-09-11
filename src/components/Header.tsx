import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Input } from './Input'
import { Button } from './Button'

import logoImg from '../assets/logo.svg'
import plusImg from '../assets/plus.svg'
import styles from "./Header.module.css"

interface IHeaderProps {
  onAddTodo: (description: string) => void;
}

export function Header({ onAddTodo }: IHeaderProps) {
  const [newTask, setNewTask] = useState('');

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTodo(newTask);
    setNewTask('');
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
