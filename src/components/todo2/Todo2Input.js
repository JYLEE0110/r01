import { useState } from "react";
import { postTodo } from "../../api/todoAPI";

const initState = {
    title: ''
}

const Todo2Input = ({changeView}) => {

    const [todo, setTodo] = useState(initState)

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value

        // 새로운 property가 추가될때  Spread문법으로 처리가 유용
        setTodo({ ...todo })

        console.log(todo)
    }

    return (

        <div className="w-full h-[100vh] bg-purple-500">

            <div className="text-3xl">Todo2 List</div>
            <div className="text-2xl m-2 p-2 border-2">
                <input type="text" name="title" value={todo.title} onChange={handleChangeTodo}></input>
            </div>
            <div>
                <button onClick={() => {
                    postTodo(todo).then(newTodo => {
                        alert("새로운 TODO" + newTodo.tno)
                        changeView("list")
                    })
                }
            }
                >Register</button>
            </div>
        </div>

    );
}

export default Todo2Input;