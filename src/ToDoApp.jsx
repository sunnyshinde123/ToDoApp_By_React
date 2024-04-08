import { useState } from "react"
import ToDoAddList from "./ToDoAddList"
import ToDoViewList from "./ToDoViewList"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoApp(){
    let [listTask, setListTask]=useState([{id:uuidv4(), task:"Wake Up"}]);

    let addTaskInList = (list) =>{
        setListTask([...listTask, {id:uuidv4(), task:list}])
    }

    let deleteList = (id) =>{
        setListTask((prev)=>{ return listTask.filter((prev)=> prev.id!=id)} )
    }

    return(
        <>
        <ToDoAddList addTaskInList={addTaskInList}/>
        <ToDoViewList listTask={listTask}/>
        </>
    )
}