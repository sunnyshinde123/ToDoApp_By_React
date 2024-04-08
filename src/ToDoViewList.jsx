export default function ToDoViewList({listTask}){
    return(
        <>
        <ul>
            {listTask.map((ele)=> <li key={ele.id}>{ele.task}</li>)}
        </ul>
        </>
    )
}