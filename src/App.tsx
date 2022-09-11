import { MouseEvent, useState } from 'react';

import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { ITodoDTO } from './dtos/TodoDTO';

import styles from "./App.module.css"

import './global.css'

export function App() {
  const [todos, setTodos] = useState<ITodoDTO[]>([]);

  function onAddTodo(description: string) {
    setTodos([...todos, { description }]);
  }

  function onCheckTodo(description: string) {
    const indexTodo = todos.findIndex(todo => todo.description === description);

    todos[indexTodo].done = !todos[indexTodo].done;
    setTodos([...todos]);
  }

  function onDeleteTodo(event: MouseEvent<HTMLButtonElement>, description: string) {
    event.stopPropagation();

    const filteredTodos = todos.filter(todo => todo.description !== description);

    setTodos([...filteredTodos]);
  }

  return (
    <div className={styles.app}>
      <Header onAddTodo={onAddTodo} />

      <main>
        <TodoList
          todos={todos}
          onCheckTodo={onCheckTodo}
          onDeleteTodo={onDeleteTodo}
        />
      </main>
    </div>
  )
}
