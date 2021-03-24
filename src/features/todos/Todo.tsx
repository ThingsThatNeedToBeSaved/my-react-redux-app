import React from 'react'

interface Props {
    todo: {
        id: number,
        title: string,
        isDone: boolean
    },
    handleDone: (todo : Props["todo"]) => void,
    handleRemove: (todo : Props["todo"]) => void
}

export default function Todo(props : Props) {
    const {todo, handleDone, handleRemove} = props;

    return (
        <div  className="d-flex flex-column justify-content-center mb-3 mt-1 w-25">
            <div className="d-flex justify-content-evenly" style={{zIndex: 1, marginBottom: "-.3rem"}}>
                <button className="btn btn-danger" onClick={() => handleRemove(todo)}>Remove</button>
                <button className="btn btn-success" onClick={() => handleDone(todo)}>Done</button>
            </div>
            <button 
                key={todo.id} 
                className="btn btn-secondary mx-2 px-3 py-2 text-white text-center border" 
                style={{zIndex: 2, marginBottom: "-.5rem"}}
                disabled={todo.isDone}
                >
                {todo.title}
            </button>
        </div>
    )
}
