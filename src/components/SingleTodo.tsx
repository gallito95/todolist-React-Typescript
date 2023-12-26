import React from 'react'
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
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>
      {todo.todo}
      </span>
     <div>
      <span className="icon">
      <MdEdit />
      </span>
      <span className="icon">
      <AiFillDelete />
      </span>
      <span className="icon">
      <IoIosDoneAll />
      </span>
     </div>   
    </form>
  )
}

export default SingleTodo