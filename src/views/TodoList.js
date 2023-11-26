import React from 'react'
import Todos from '../components/todos/Todos'
import TodosForm from '../components/todos/TodosForm'

const TodoList = () => {
  return (
    <main>
      <div className='container'>
        <div className='todos'>
          <TodosForm />
          <Todos />
        </div>
      </div>
    </main>
  )
}

export default TodoList