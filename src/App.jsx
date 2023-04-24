import { useContext } from "react"
import TaskForm from "./components/TaskForm/TaskForm"
import TaskList from "./components/TaskList/TaskList"
import { TaskContext } from "./context/TaskContext"
import TaskFormEdit from "./components/TaskFormEdit/TaskFormEdit";

function App() {
  const {edit} = useContext(TaskContext);
  return (
    <div className="App bg-slate-800 h-screen">
      <div className="mx-auto" >
        {
          !edit ? 
          <TaskForm />
          :
          <TaskFormEdit/>
        
        }
        <TaskList /> 
      </div>

    </div>
  )
}

export default App
