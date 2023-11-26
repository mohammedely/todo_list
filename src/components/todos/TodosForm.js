import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import { Circle } from 'feather-icons-react/build/IconComponents'
import React from 'react'

const TodosForm = () => {
  return (
    <div className='todos-form'>
      <div className='todos-form_icon'>
        <FeatherIcon icon="circle"/>
      </div>
      <div className='todos-form_form'>
        <input type='text' placeholder='Add new task..' />
      </div>
      <div className='todos-form_submit'>
        <button className='btn'> Add </button>
      </div>
    </div>
  )
}

export default TodosForm