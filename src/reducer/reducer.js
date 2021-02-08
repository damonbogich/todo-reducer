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
                    console.log('if entered for:', item)
                    return {...item, completed: !item.completed}
                }
                console.log(item)
                return item 
            })
            return {...state, todos: updatedTodos};
        }
        default: 
            return state
    }
};
