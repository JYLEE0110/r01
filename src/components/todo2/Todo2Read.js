import { useEffect, useState } from "react"
import { getTodo, putTodo, removeTodo } from "../../api/todoAPI"

const initState = {
    tno : 0,
    title : ''
}

const Todo2Read = ({target, changeView}) => {


    const [todo, setTodo] = useState(initState)
    const [refresh, setRefresh] = useState(false)

    // update시 target이 변경되지않으므로 랜더링이 안된다. => refresh
    useEffect(() => {

        getTodo(target).then(data => setTodo(data))

    },[target, refresh])


    // 비동기로 삭제 useEffect가 아님 => 화면 랜더링이 아니다
    const handleClickDel = async() => {

        const {result} = await removeTodo(target)

        //{result : 'success'}

        if(result === 'success'){
            alert("삭제되었습니다.")
        }

        changeView("list")

    }

    const handleClickMod = async() => {

        const{result} = await putTodo(todo)

        if(result === 'success'){
            alert("수정되었습니다.")
        }

        // 수정 후 refresh를 변경해서 랜더링이 되게 설계
        setRefresh(!refresh)

    }

    return ( 
        <div>
            <div>Todo Read</div>
            <div>{target}</div>
            <div>{todo.tno}</div>
            <div>
                <input type="text" value={todo.title} onChange={e => {
                    todo.title = e.target.value 
                    setTodo({...todo})}}>
                </input>
            </div>
            <div className="flex p-4">
                <button className ="m-2 p-2 border-2" onClick={handleClickMod}>MOD</button>
                <button className ="m-2 p-2 border-2" onClick ={handleClickDel}>DEL</button>
            </div>
        </div>
     );
}
 
export default Todo2Read;