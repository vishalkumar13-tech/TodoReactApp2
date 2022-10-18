import React , { useState , useEffect } from 'react'
import Header from './header.js'
import Data from './showData.js'

export default function  App() {
    const [newE,setnewE] = useState("")
    const [tasks,setTasks] = useState(0)
    const [tasksDone,setTasksDone] = useState(0)
    const [users,setUsers] = useState([])


  function  addNewTask() {
      if(newE){
     setUsers( users => [{ name : newE , done : false , id : new Date()},...users])
     setnewE("")  
     setTasks( prev => prev+1)
      }    
  }

  function deleteTask(todel) {
      let inx  = users.indexOf(todel)
      if(todel.done==true)setTasksDone(prev => prev-1)
        setUsers( users => users.filter((_,i) => i !== inx ))
        setTasks(tasks => tasks-1)

    }

    function doneEvent(id){
        const updated = users.map( user => {
            if(user.id == id){
                (user.done == false)?setTasksDone( prev => prev+1):setTasksDone( prev => prev-1)
                // user.done = !user.done
                return{
                    ...user,
                    done : !user.done
                }
            }
            else return user
        })
        setUsers(updated)
    }

 

return(
    <div className = "Baap">
            <Header totalTasks = {tasks} tasksDone={tasksDone} />
        
            <form className = "inputForm">
            <input 
            className = "inputTask"
            required
            type = "text" 
            placeholder = "New Task"
            value = {newE}
            onChange = {(e)=>setnewE(e.target.value)}
            />
            <button
            style = {{display : "none"}}
            onClick ={addNewTask}
            >
            Add
            </button>
            </form>
            {users.map( user => <Data user = {user} delete = {deleteTask} doneEvent = {doneEvent} />)}
        </div>
)   
}