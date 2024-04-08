import { useState } from "react"
import ToDoAddList from "./ToDoAddList"
import ToDoViewList from "./ToDoViewList"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoApp(){
    let [listTask, setListTask]=useState([{}]);

    let addTaskInList = (list) =>{
        setListTask([...listTask, ...list])
    }

    return(
        <>
        <ToDoAddList addTaskInList={addTaskInList}/>
        <ToDoViewList listTask={listTask}/>
        </>
    )
}