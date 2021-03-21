import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, selectTodos } from './todosSlice';
import Spinner from '../../helpers/Spinner';

export default function Todos() {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [ newTodo, setNewTodo ] = useState("");
    
    return (
        <React.Fragment>
            <div className="row w-50 position-absolute top-50 start-50 translate-middle" style={{zIndex: 100,opacity: 0.9}}>
                    <div className="card-header bg-secondary">
                        <h3 className="text-center text-white p-2">Things that need to be done!</h3>
                    </div>
                    <div className="card-body bg-secondary">
                        <div className="card-item d-flex justify-content-center">
                            <input className="fs-3 px-2 py-1 w-75"/>
                            <button className="btn btn-primary rounded-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="card-footer bg-secondary d-flex justify-content-evenly">
                        {todos.todos[0] ? (
                            todos.todos.map((todo) => {
                                return <button key={todo.id} className="btn btn-secondary mx-2 px-3 py-2 text-white text-center border">{todo.title}</button>
                            })
                        ) : <Spinner />}
                    </div>
            </div>
        </React.Fragment>
    )
}