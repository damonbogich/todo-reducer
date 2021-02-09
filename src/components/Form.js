import React, {useState} from 'react';
export default function Form({dispatch}) {
    const [newItem, setNewItem] = useState("");

    const handleInput = (e) => {
        setNewItem(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: newItem})
    };
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => handleInput(e)} value={newItem} placeholder='New todo' />
            <button>Add todo</button>
            <button onClick={(e) => dispatch({type: "CLEAR_COMPLETED", payload: e})}>Clear Completed</button>
        </form>
    )
};