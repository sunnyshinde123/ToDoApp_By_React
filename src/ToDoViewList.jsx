import { useState } from "react"

export default function ToDoViewList({listTask, onClick}){
    // let [use, setUse]=useState([{}]);

    // let deleteList= (id) =>{
    //     setUse((prev)=> use.filter((prev)=> (prev.id!=id)));
    // }

    return(
        <>
        <ul>
            {listTask.map((task)=> <li key={task.id}><span>{task.task}</span>
            <button onClick={onClick}>Delete</button>
            </li>) }
        </ul>
        </>
    )
}