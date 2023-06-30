const Todo1List = ({todos, requestView, saveAll}) => {
    return ( 

        <div className="w-full bg-blue-300">
            <div>Todo1List</div>

            <ul>
                {todos.map(t => 
                <li key={t.tno}
                onClick={() => requestView(t.tno)}
                >{t.tno} - {t.title}</li>)}
            </ul>

            <button onClick={saveAll}>SaveAll</button>
        </div>

     );
}
 
export default Todo1List;