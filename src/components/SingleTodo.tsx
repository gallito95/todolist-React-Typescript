import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { IoIosDoneAll } from "react-icons/io";
import {Todo} from '../model';


interface Props{

    todo:Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>> ;
}


const SingleTodo= ({todo, todos, setTodos}:Props) => {

  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  
  const [edit,setEdit] = useState<boolean>(false)
  

const handleDelete = (id:number) => {
setTodos(todos.filter((todo) => todo.id !== id))
}

const handleIsDone = (id:number) => {
  setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone : !todo.isDone} : todo))
}


const handleEdit = (e:React.FormEvent, id: number) => {
  e.preventDefault()
  setTodos(todos.map((todo) => todo.id === id ? {...todo, todo : editTodo}: todo))
  setEdit(false)
  
}

  return (
 
    <form  
      onSubmit={(e) => {handleEdit(e,todo.id);
      }
    }
      className={todo.isDone ? 'todos__single todos__single--done' : 'todos__single'}>
        
     { edit? (
      <input type="text" 
      value = {editTodo}
      onChange={(e) => setEditTodo(e.target.value)}
      className='todos__single--text'/>
     ) : 
     <span> {todo.todo} </span>}
    <div>
     <span
      className="icon"  

      onClick={() =>{
      if(!edit)
      {setEdit(!edit)}
    }}>
      <MdEdit />
      </span>
      <span className="icon"  onClick={() => handleDelete(todo.id)}>
      <AiFillDelete />
      </span>
      <span className="icon" 
      onClick={() => !edit && handleIsDone(todo.id)} >
      <IoIosDoneAll />
      </span>
      </div>
    </form>
  )
}

export default SingleTodo