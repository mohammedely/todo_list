import React from 'react'
import FeatherIcon from 'feather-icons-react'

const Todo = () => {
  return (
    <div className='todos-todo'>
      <div className='todos-todo_icon'></div>
      <div className='todos-todo_text'>Task 1</div>
      <div className='todos-todo_cta'></div>
      <div className='todos-todo_cta-edit'>
        <FeatherIcon icon="edit" size="20" />
      </div>
      <div className='todos-todo_cta-delete'>
        <FeatherIcon icon="trash-2" size="20" />
      </div>
    </div>
  )
}

export default Todo