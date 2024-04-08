import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoAddList({addTaskInList}){
    // let [list, setList]=useState([{task:"eat", id:uuidv4()}]);
    let [addList, setAddList]=useState("");

    let addTask = (event) =>{
        setAddList(event.target.value);
    }

    let addListInTask = (event) =>{
        if (addList.trim() !== '') {
            addTaskInList(addList);
            setAddList('');
        }
        // setList([...list, {task:addList, id:uuidv4()}]);
        // setAddList("");
        // console.log(list);
        // addTaskInList(list);
    }

    return(
        <>
        <div>
            <h3>Add List</h3>
            <input type="text" placeholder="Add List" onChange={addTask} value={addList}/>
            <br /><br />
            <button onClick={addListInTask}>Add</button>
            <hr />
            {/* <ul>
                {list.map((obj)=> <li>{obj.task}</li>)}
            </ul> */}
        </div>
        </>
    )
}