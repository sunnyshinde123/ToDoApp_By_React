import { useState } from "react"
import ToDoAddList from "./ToDoAddList"
import ToDoViewList from "./ToDoViewList"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoApp(){
    let [listTask, setListTask]=useState([{id:uuidv4(), task:"Wake Up", isDone:true}]);

    let addTaskInList = (list) =>{
        setListTask([...listTask, {id:uuidv4(), task:list, isDone:true}])
    }

    let deleteList = (id) =>{
        setListTask((prev)=>{ return listTask.filter((prev)=> prev.id!=id)} )
    }

    let deleteAll = () =>{
        setListTask((prev)=> listTask.filter((prev)=> {}));
    }

    let upperCaseAll = () =>{
        setListTask((prev)=> listTask.map((prev)=> {
            return {...prev, task:prev.task.toUpperCase()}
        }))
    }

    let upperCase = (id) =>{
        setListTask((prev)=> listTask.map((prev)=>{
            if(prev.id==id){
                return{
                    ...prev,
                    task:prev.task.toUpperCase()
                }
            }else{
                return prev;
            }
        }))
    }

    let markAllDone = () =>{
        setListTask((prev)=> listTask.map((prev)=>{
            console.log(prev);
            return {...prev, isDone:false}
        }))
    }

    let markDone = (id) =>{
        setListTask((prev)=> listTask.map((prev)=>{
            if(prev.id==id){
                return {
                    ...prev,
                    isDone:false,
                }
            }else{
                return prev
            }
        }))
    }

    return(
        <>
        <ToDoAddList addTaskInList={addTaskInList}/>
        <ToDoViewList listTask={listTask} deleteTask={deleteList} deleteAll={deleteAll} upperCaseAll={upperCaseAll} upperCase={upperCase} markAllDone={markAllDone} markDone={markDone}/>

        </>
    )
}