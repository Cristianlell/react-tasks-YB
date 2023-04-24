import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
    const { createTask } = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);
    let isEmptyTitle = title.length == 0;
    let isEmptyDescription = description.length == 0;
    let isEmpty = !isEmptyDescription && !isEmptyTitle;

    const handleSubmit = (e) => {
        e.preventDefault();
        isEmptyTitle ? setErrorTitle(true) : setErrorTitle(false);
        isEmptyDescription
            ? setErrorDescription(true)
            : setErrorDescription(false);
        if (!errorDescription && !errorTitle && isEmpty) {
            createTask({
                title,
                description,
            });
            setTitle("");
            setDescription("");
            setErrorTitle(false);
            setErrorDescription(false);
        }
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

 
    return (
        <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="p-5 mb-4">
                    <h1 className="text-white text-2xl font-bold text-center mb-3">
                        Agregar Tarea
                    </h1>
                    {errorTitle ? (
                        <p className="text-white font-bold bg-red-500 text-center">
                            No puede estar vacío
                        </p>
                    ) : null}
                    <input
                        onChange={handleTitle}
                        type="text"
                        className="bg-slate-400
                p-2 w-full mb-2 placeholder-white font-medium text-zinc-700"
                        placeholder="Escriba el titulo"
                        autoFocus
                        value={title}
                    />

                    {errorDescription ? (
                        <p className="text-white font-bold bg-red-500 text-center">
                            No puede estar vacío
                        </p>
                    ) : null}
                    <textarea
                        onChange={handleDescription}
                        placeholder="Escriba la descripción"
                        className="bg-slate-400
                p-2 w-full mb-2 placeholder-white font-medium text-zinc-700"
                        value={description}
                    ></textarea>

                    <button className="text-white bg-blue-700 hover:bg-blue-600 p-2 rounded-md">
                        Guardar
                    </button>
                </form>
        </div>
    );
};

export default TaskForm;
