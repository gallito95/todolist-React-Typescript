import React from "react";
import './styles.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void;
}

const InputField = ({todo,setTodo, handleAdd}:Props) => {
    return(
        <form  className="input" onSubmit={(e) => handleAdd(e)}>
            <input 
            value={todo}
            onChange={(e) => setTodo(e.target.value)   }
            className="input__box" 
            type="input" 
            placeholder="Enter a task"
            />
            <button className="input__submit" type="submit"> Go </button>
        </form>
    )
}

export default InputField