import "./HealthyInputList.css"
export default function HealthyItemsList({listItems, deleteList}){

    let handleOnDelete = (id)=>{
        deleteList(id);
    }

    return (
        <>
        <div className="container container-list">
        {listItems.map((ele)=> 
        <div className="row col-7 offset-3 mt-3 kg-row border" key={ele.id}>
        <div className="col-4">
            <p>{ele.list}</p>
            </div>
            <div className="col-4">
            <p>{ele.date}</p>
            </div>
            <div className="col-2">
            <button className="btn btn-danger" onClick={() =>handleOnDelete(ele.id)}>Delete</button>
        </div>
        </div>
        )}
        </div>
        </>
    )
}