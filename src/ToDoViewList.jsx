import { useState } from "react"

export default function ToDoViewList({listTask, deleteTask, deleteAll, upperCaseAll, upperCase, markAllDone, markDone}){

    return(
        <>
        <ul>
            {listTask.map((task)=> <li key={task.id}><span style={task.isDone ?  {} : {textDecoration:"line-through"}}>{task.task}</span>
            <button onClick={()=>deleteTask(task.id)}>Delete</button> &nbsp; &nbsp; <button onClick={()=>upperCase(task.id)}>UpeerCase</button> <button onClick={()=> markDone(task.id)}>Mark Done</button>
            </li>) }
        </ul>
        <hr />
        <button onClick={deleteAll}>Delete All</button>
        <button onClick={upperCaseAll}>UpperCase All</button>
        <button onClick={markAllDone}>Mark All Done</button>
        </>
    )
}