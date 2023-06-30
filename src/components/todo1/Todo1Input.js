import { useState } from "react";

const Todo1Input = ({addTodo}) => {
    
    const [todo, setTodo] = useState({title:''})
    


    return (
        <div className="w-full bg-green-300">
            <div>Todo Input</div>
            <div>
                <input
                className="m-3 p-3 bg-blue-300"
                type='text' 
                name='title' 
                value={todo.title} 
                onChange={(e) => {
                    todo.title = e.target.value
                    setTodo({...todo})
                }}></input>
            <button className ="bg-blue-300 m-3 p-3"
             onClick={ () => {
                addTodo(todo)
                setTodo({title:''})
            }
            }
             >ADD todo</button>
            </div>

            <hr></hr>
        </div>
    );
}

export default Todo1Input;