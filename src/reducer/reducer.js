export const initialState = {
    todos: [
        {item: 'Learn about reducers', completed: false, id: 1},
        {item: 'Workout', completed: false, id: 2},
        {item: 'Eat a good breakfast', completed: false, id: 3}
    ]
};

export const reducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_TODO": {
            let updatedTodos = state.todos.map((item) => {
                if(item.id === parseInt(action.payload)) {
                    return {...item, completed: !item.completed}
                }
                return item 
            })
            return {...state, todos: updatedTodos};
        }
        case "CLEAR_COMPLETED": {
            console.log('clear clicked');
            action.payload.preventDefault();
            let updatedTodos = state.todos.filter((item) => {
                if (item.completed === false) {
                    return item
                }
            })
            console.log(updatedTodos)
            return {...state, todos: updatedTodos};
        }
        default: 
            return state
    }
};
