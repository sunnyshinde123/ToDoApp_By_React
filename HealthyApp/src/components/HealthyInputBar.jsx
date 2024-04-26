import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./HealthyInputBar.css"

export default function HealthyInputBar({onbtnClick}){
    let [data, setData]=useState({
        id:uuidv4(),
        list:"",
        date:""
    });

    let handleOnChange = (event)=>{
        setData((currData)=>{
            return {...currData, [event.target.name]:event.target.value}
        })
    }

    let handleOnSubmit = (event) =>{
        event.preventDefault();
        onbtnClick(data);
        setData({
            id:uuidv4(),
            list:"",
            date:"",
        });
    }


    return (
        <>
        <div className="container form-container">
        <form className="row col-7 offset-3 mt-4 kg-row" action="/" onSubmit={handleOnSubmit}>
            <div className="col-4">
            <input type="text" className="form-input" placeholder='enter name here...' name="list" value={data.list} onChange={handleOnChange} required/>
            </div>
            <div className="col-4">
            <input type="date" className="form-input" name="date" value={data.value} onChange={handleOnChange}/>
            </div>
            <div className="col-2">
            <button className="btn btn-success">Add</button>
            </div>
        </form>
        </div>
        </>
    )
}
