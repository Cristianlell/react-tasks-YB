import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskFormEdit = () => {
    const { editTask, edit, setEdit, taskEdit} = useContext(TaskContext);
    const [task, setTask] = useState({
        title: '',
        description: ''
   });
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);
    let isEmptyTitle = task.title.length == 0;
    let isEmptyDescription = task.description.length == 0;
    let isEmpty = !isEmptyDescription && !isEmptyTitle;

   useEffect(() => {
    setTask(taskEdit)
    }, [])
   

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (isEmpty) {
            editTask(taskEdit.id, !isEmpty ? taskEdit : task);
            setTask({title:"",description:""})
            setErrorTitle(false);
            setErrorDescription(false);
            setEdit(!edit)
        }
    };

    const handleChange = ({ target }) => {
        setTask({
             ...task,
             [target.name]: target.value,
        });
   };

   const handleCancelar =()=>{
    setEdit(!edit)
   }

    return (
        <div  className="max-w-md mx-auto">
            <form onSubmit={handleEditSubmit} className="p-5 mb-4">
                <h1 className="text-white text-2xl font-bold text-center mb-3">
                    Editar Tarea
                </h1>
                {errorTitle ? (
                    <p className="text-white font-bold bg-red-500 text-center">
                        No puede estar vacío
                    </p>
                ) : null}
                <input
                    name="title"
                    type="text"
                    className="bg-slate-400
                    p-2 w-full mb-2 placeholder-white font-medium text-zinc-700"
                    placeholder="Escriba el titulo"
                    autoFocus
                    onChange={handleChange}
                    value={task.title}
                />

                {errorDescription ? (
                    <p className="text-white font-bold bg-red-500 text-center">
                        No puede estar vacío
                    </p>
                ) : null}
                <textarea
                    name="description"
                    placeholder="Escriba la descripción"
                    className="bg-slate-400
                    p-2 w-full mb-2 placeholder-white font-medium text-zinc-700"
                    onChange={handleChange}
                    value={task.description}
                ></textarea>

                <button className="text-white bg-green-700 hover:bg-green-600 p-2 rounded-md">
                    Guardar
                </button>
                <button onClick={handleCancelar} className="text-white bg-red-700 hover:bg-red-600 p-2 ml-4 rounded-md">
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default TaskFormEdit;
