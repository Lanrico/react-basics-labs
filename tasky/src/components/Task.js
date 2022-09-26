import React from "react";

const Task = (props) => {
    return(
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>            
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.description}</p>
            <button onClick={props.markDone} className="doneButton">Done</button>
            <button onClick={props.deleteTask} className="deleteButton">Delete</button>
        </div>
    )
}

export default Task;