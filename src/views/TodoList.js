import React, { useState } from 'react'
import Todos from '../components/todos/Todos'
import TodosForm from '../components/todos/TodosForm'

// const initialData = [
//   {id: 1, title: "Do primaries", done: false},
//   {id: 2, title: "Buy products", done: true},
//   {id: 3, title: "Watch course", done: false},
//   {id: 4, title: "Write code", done: true},
// ];
const initialData = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

const TodoList = () => {

  const [todos, setTodos] = useState(initialData)
  // modes: add, filter, edit
  const [mode, setMode] = useState('add')
  const [activeTodo, setActiveTodo] = useState(null)

  const setToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const toggleTodo = (id) => {
    // const newData = todos.map(td => {
    //   if (td.id === id) {
    //     td.done = !td.done
    //   }
    //   return td
    // })
    // setTodos(newData)
    setTodos((data) => {
      const newData = data.map(td => {
        if (td.id === id) {
          return {...td, done: !td.done}
        }
        return td
      })
      return newData
    })
    
  }

  const deleteTodo = id => {
    setTodos((data) => {
      const newData = data.filter(td => td.id !== id)
      return newData
    })
    
  }
  
  const addNewTodo = (title) => {
    if (mode !== 'edit') {
      const newTodo = {
        id: new Date().getTime(),
        title,
        done: false
      }
      setTodos(data => {
        return [
          newTodo,
          ...data
        ]
      })
    } else if (mode === 'edit') {
      const newTodos = todos.map(t => {
        if (t.id === activeTodo.id) {
          t.title = title
        }
        return t
      })
      setTodos(newTodos)
      setMode('add')
    }
    
  }

  const toggleFilter = () => {
    if (mode ==='edit') {
      return
    }
    if (mode === 'filter') {
      setMode('add')
    } else {
      setMode('filter')
    }
  }

  const editTodo = (todo) => {
    setMode('edit')
    setActiveTodo(todo)
  }

  let currentTodos = [...todos]
  
  if (mode === 'filter') {
    currentTodos = todos.filter(t => !t.done)
  }
  if (mode === 'edit' && activeTodo) {
    currentTodos = [activeTodo]
  }

  setToLocal()
  
  return (
    <main>
      <div className='container'>
        <div className='todos'>
          <TodosForm
            addNewTodo={addNewTodo}
            toggleFilter={toggleFilter}
            mode={mode}
            activeTodo={activeTodo}
          />
          <Todos
           todos={currentTodos}
           mode={mode}
           toggleTodo={toggleTodo}
           deleteTodo={deleteTodo}
           editTodo={editTodo}
          />
        </div>
      </div>
    </main>
  )
}

export default TodoList