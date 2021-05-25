import { useState } from "react";
import "../components/ToDoApp.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ToDos from "../components/ToDos";

const ToDoApp = () =>{

    const [name , SetName] = useState("");
    const [textarea, settextarea] = useState("");
    const [todo , SetTodo] = useState([]); 
    const[isvalid , setisvalid] = useState(true)


    const inputEvent = (event) =>{
        setisvalid(true)
        SetName(event.target.value)
    }
    const taEvent = (event) =>{
        settextarea(event.target.value)
    }



    const additem = () =>{
        if(name.trim().length>0 && textarea.trim().length>0){
            SetTodo((prevstate)=>{
                return([...prevstate,{name:name,desc:textarea}]);
            });
        }
        else if(name.trim().length>0 && textarea.trim().length===0){
            SetTodo((prevstate)=>{
                return([...prevstate,{name:name,desc:"---"}]);
            });
        }else if(name.trim().length===0 && textarea.trim().length===0){
            setisvalid(false);
        }
        settextarea("");
        SetName("");
    };

    return(
        <div className="container">
            <div className="jumbotron text-center">
                <h2>My todo's</h2>
            </div>
            <div className=" container bg-dark mt-4 main_container rounded">
                <div className="container">
                    <div className="row pt-3 justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <input type="text" style={{background: !isvalid ? 'salmon' : 'white'}} className="rounded input_box" placeholder="enter your todo here" onChange={inputEvent} value={name}></input>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                            <textarea rows="3" type="text" onChange={taEvent} value={textarea} className="rounded" placeholder="description here..."></textarea>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                            <button type="button" className="btn btn-outline-warning" onClick={additem}>add</button>
                        </div>
                    </div>
                 </div>
                <ToDos todo={todo} SetTodo={SetTodo}/>
            </div>
        </div>
    );
}

export default ToDoApp;