import React, { useRef } from "react";
import './styles.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        handleAdd(e);
        // Fokus entfernen
        if (inputRef.current) {
            inputRef.current.blur();
        }
    }

    return (
        <form className="input" onSubmit={(e) => handleSubmit(e)}>
            <input 
                ref={inputRef}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="input__box" 
                type="input" 
                placeholder="Enter a task"
            />
            <button className="input__submit" type="submit"> Go </button>
        </form>
    )
}

export default InputField;