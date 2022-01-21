import { useState } from "react";

function Todo() {
    const [toDo, setToDo] = useState("");
    const [toDoList,setToDoList] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDo("");
        setToDoList((prev) => [...prev, toDo]);
    }

    return (
        <div>
            <h1>My Todo Count ({toDoList.length})</h1>
            <form onSubmit={onSubmit}>
                <input 
                    value={toDo} 
                    onChange={onChange} 
                    type="text" 
                    placeholder="할일 입력..." 
                />
                <button>할일 추가</button>
            </form>
        </div>
    )
}

export default Todo;