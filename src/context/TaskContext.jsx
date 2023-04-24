import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState(false);
    const [taskEdit, setTaskEdit] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("tasks"));
        if (data) {
            setTasks(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const createTask = (task) => {
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                title: task.title,
                description: task.description,
            },
        ]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const editTask = (id, taskEdit) => {
       let updateTasks = tasks.map(task => {
          if (task.id === id) {
            return task = taskEdit
          }else{
            return task
          }
        })
        setTasks(updateTasks)
      
    };
    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask,
                editTask,
                edit,
                setEdit,
                taskEdit,
                setTaskEdit,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};
