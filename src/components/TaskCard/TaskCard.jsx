import { useContext, useState} from "react";
import { TaskContext } from '../../context/TaskContext';
import {GrCompliance} from 'react-icons/gr';
import './taskCard.css'
const TaskCard = ({ task }) => {
     const [click, setClick] = useState(false);
     const {deleteTask, setEdit, edit,setTaskEdit} = useContext(TaskContext);

     const handleDelete = (e)=> {
          deleteTask(task.id)
     }
     const handleClick = ()=>{
          setClick(!click)
     }

     const handleEditar = ()=>{
          setEdit(!edit);
          setTaskEdit(task);
     }
     return (
          <div className={`mx-2 rounded-md p-4 my-2 container-card ${edit || click ? "bg-gray-500	" : "bg-slate-900" }  `}  >
               <span onClick={handleClick} className="container-icon">
                    <GrCompliance  className={`${click ? "completado-icon bg-green-500" : "bg-white completado-icon" }` }/> 
               </span>
               <h1 className={`${edit || click && "line-through"} text-white text-xl font-bold capitalize`}>{task.title}</h1>
               <p className={`${edit || click && "line-through"} text-white text-sm`}>{task.description}</p>
               <button className={`text-white px-2 py-1 rounded-md mt-4 ${edit ? " bg-gray-800 " : "bg-red-600 hover:bg-red-500" }`} disabled={edit} onClick={handleDelete}>Quitar</button>
               <button className={`text-white px-2 py-1 rounded-md mt-4 ml-7 ${edit ? " bg-gray-800 " : "bg-green-600 hover:bg-green-500" }`} disabled={edit} onClick={handleEditar}>Editar</button>
          </div>
     );
};

export default TaskCard;
