import { useState } from "react"

export default function ToDoViewList({listTask, onClick}){

    return(
        <>
        <ul>
            {listTask.map((task)=> <li key={task.id}><span>{task.task}</span>
            <button onClick={()=>onClick(task.id)}>Delete</button>
            </li>) }
        </ul>
        </>
    )
}