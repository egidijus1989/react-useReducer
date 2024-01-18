import { useGlobalContext } from "../../context/TasksContext"
import { useState, useId,} from "react"

const AddTask = () =>{
    const {addTask, handleForm} = useGlobalContext();
    const id = useId()
    const [newTask, setNewTask] = useState({
        id: "",
        title: "",
        description: ""
    })

    const handleChange = (e) =>{
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value, id
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        handleForm(false)

    }
    console.log(newTask)
    return(
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" id="title" className="form-control" name="title" value={newTask.title} placeholder="title" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <textarea type="text" id="description" className="form-control" name="description" value={newTask.description} placeholder="description" onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Add Task</button>
                </div>
            </form>
    )
}
export default AddTask