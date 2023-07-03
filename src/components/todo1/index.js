import { useEffect, useState } from "react";
import uuid from 'react-uuid'
import Todo1Input from "./Todo1Input";
import Todo1List from "./Todo1List";
import Todo1Read from "./Todo1Read";

const Todo1 = () => {
    
    // Todos => todo 전체 목록
    const [todos, setTodos] = useState([])

    // todo값 1개 (Read)
    const [current, setCurrent] = useState(null)

    useEffect(()=> {

        const jsonStr = localStorage.getItem("todos")

        if(jsonStr){
            setTodos(JSON.parse(jsonStr))
        }
    },[])

    const saveAll = () => {

        const str = JSON.stringify(todos)
        localStorage.setItem("todos", str)

    }


    const addTodo = (todoObj) => {

        console.log(uuid(), todoObj)
        setTodos([...todos, {tno:uuid(), ...todoObj}])
    }

    const requestView = (tno) => {
        // 상태로 관리
        const target = todos.filter(todo => todo.tno === tno)[0]
        console.log("requestView", target)
        setCurrent(target)

    }

    const remove = (tno) => {

        setTodos( todos.filter(todo => todo.tno !== tno))
        setCurrent(null)

    }

    const modify = (modifiedTodo) => {

        // 얕은 복사이기 때문에 filter 결과값이 todos를 참조한다.
        const target = todos.filter(todo => todo.tno === modifiedTodo.tno)[0]

        target.title = modifiedTodo.title

        setTodos([...todos])
        setCurrent(null)

    }

    return ( 


        <div>
            <div className = "text-5xl">Todo 1</div>
            <div>
            <Todo1Input addTodo={addTodo}></Todo1Input>
            <Todo1Read current={current} remove={remove} modify={modify} ></Todo1Read>
            <Todo1List requestView={requestView} todos={todos} saveAll={saveAll}></Todo1List>
            </div>
        </div>

     );
}
 
export default Todo1;