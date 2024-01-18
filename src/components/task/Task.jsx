import { useGlobalContext } from "../../context/TasksContext"

const Task = (props) =>{
    const {removeTask} = useGlobalContext()
    return(
        <li className="list-group-item d-flex justify-content-between">{props.title} : {props.description}
        <button className="btn btn-danger" onClick={() => removeTask(props.id)}>Salinti</button></li>
    )
}
export default Task