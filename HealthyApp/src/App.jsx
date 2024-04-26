import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HealthyInputBar from './components/HealthyInputBar'
import HealthyItemsList from './components/HealthyItemsList'
import { v4 as uuidv4 } from 'uuid';
import style from './App.module.css'
function App() {
  let [state, setState]=useState([{
    id:uuidv4(),
    list:"Roti",
    date:"2024-04-02"
  }]);

  let onbtnClick=(data)=>{
    setState((prev)=>{
      return [...prev, data]
    })
  }

  let deleteList = (id) =>{
    setState((prev)=>{
      return prev.filter((ele)=> ele.id!=id)
    })
  }

  return (
    <>
    <center className='mt-3' style={{fontWeight:"bolder", fontSize:"30px"}}>ToDo App</center>
    <div className="container text-center">
      <HealthyInputBar onbtnClick={onbtnClick}></HealthyInputBar>
      <HealthyItemsList listItems={state} deleteList={deleteList}></HealthyItemsList>
    </div>
    </>
  )
}

export default App
