import DeleteIcon from '@material-ui/icons/Delete';
import "../components/ToDos.css";



const ToDos = (props) =>{
    const deleteElm = (id) =>{
        const updatedItems = props.todo.filter((curelm,ind)=>{
            return ind!==id;
        })
        props.SetTodo(updatedItems);
    }
    return(
        <div className="container list_div mx-auto my-5">
                            <hr />
            {props.todo.map((curelm , id)=>{
                return(
                    <div>
                    <div className="container"  key={id}>
                        <div className="rounded d-flex justify-content-center row">
                            <div className="todo_text col-lg-6 col-md-6 col-sm-8 col-10">
                                <h3 className="text-warning">{curelm.name}</h3>
                                <h6 className="text-info" style={{minHeight:"25px"}}>{curelm.desc}</h6>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                                <button type="button" className="btn btn-danger btn-sm"  onClick={()=>deleteElm(id)}>
                                    <DeleteIcon/>
                                </button>
                            </div>   
                        </div>
                    </div> 
                    {/* <hr/> */}
                    </div>   
                );
            })}
        </div>
    );
}

export default ToDos;