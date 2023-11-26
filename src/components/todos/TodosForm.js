import React, {useState} from 'react';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
const TodosForm = ({addNewTodo, toggleFilter, mode, activeTodo}) => {

  const [title, setTitle] = useState('')
  const [editRender, setEditRender] = useState(false)

  if(mode === 'edit' && !editRender) {
    setTitle(activeTodo.title)
    setEditRender(true)
  }
  
  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  const handleAddNewTodo = () => {
    setEditRender(false)
    if (!title.trim()){
      return
    }
    addNewTodo(title)
    setTitle('')
  }
  
  return (
    <div className='todos-form'>
      <div className={`todos-form_icon ${mode ==='filter'?'active':''}`} onClick={toggleFilter}>
        <FeatherIcon icon="circle"/>
      </div>
      <div className='todos-form_form'>
        <input type='text' placeholder='Add new task..' value={title} onChange={handleInputChange} />
      </div>
      <div className='todos-form_submit'>
        <button className='btn' disabled={!title.trim()} onClick={() =>   handleAddNewTodo()}> {mode === 'edit' ? 'edit':'add'} </button>
      </div>
    </div>
  )
}

export default TodosForm