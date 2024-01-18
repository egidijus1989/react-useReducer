import { useGlobalContext } from "../../context/TasksContext"
import React, { useEffect, useState } from "react";
import Task from "../task/Task";
import AddTask from "../addtask/AddTask";
import NorrisJokes from "../norrisJokes/NorrisJokes";

const Tasks = () =>{
    const {tasks, isOpen, handleForm} = useGlobalContext();
    //////////////////////////////////////////////////chuck noris////////////////////////////////////////////////
    const [jokes, setJokes] = useState([])
    useEffect(()=>{
        try{
            fetch("https://api.chucknorris.io/jokes/search?query=cat")
            .then(response=>response.json())
            .then(data=>setJokes(data.result))
        }catch(error){
            console.log(error)
        }
    }, [])
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return(
        <div className="container">
            <h2 className="m-5 text-center">Tasks list</h2>
            <div className="m-3 text-center">
                {!isOpen && <button className="btn btn-primary" onClick={()=>{handleForm(true)}}>Add task</button>}
            </div>
            {isOpen? (<AddTask/>):(
            <ul className="list-group">
                {tasks.length && tasks.map((task, i) => 
                    <Task key={i} id={task.id} title={task.title} description={task.description}/>
                )}
            </ul>
            )}
            <div className="mt-5 form-control">
                <form className="form" >
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="search..."/>
                    </div>
                </form>
                <div className="d-flex flex-wrap justify-content-between">
                    {jokes.map((joke) =>
                    <NorrisJokes key={joke.id} id ={joke.id} value={joke.value}/>
                )}
                </div>
            </div>
        </div>
    )
}
export default Tasks