import React , {useState}from 'react'

export default function Data(props){

    return(
         <div>
        <div className = "task"
        style = {{background : (props.user.done)?"green":"red"}}
         onClick = {() => props.doneEvent(props.user.id)}
        >
            <p 
            className = "taskLabel"
            >
            {props.user.name}
            </p>
        </div>
        <button className = "deleteButton" onClick = {()=> props.delete(props.user)} >X</button>
         </div>
    )
    
}

