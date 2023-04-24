import { TaskContext } from '../../context/TaskContext';
import { useContext } from "react";
import TaskCard from '../TaskCard/TaskCard';

const TaskList = () => {
     const { tasks } = useContext(TaskContext);

     if (tasks.length === 0) {
          return <h1 className="text-white text-2xl p-5 font-bold">No hay tareas</h1>;
     }
     return (
          <div className="grid grid-cols-1 place-items-center bg-slate-800 mt-5 px-5 md:grid-cols-3 lg:grid-cols-4 ">
               {
                    tasks.map((task, index) => (
                         
                          <TaskCard key={index} task={task} /> 
                    ))
               }

          </div>
     )
}

export default TaskList