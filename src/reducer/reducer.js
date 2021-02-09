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
            action.payload.preventDefault();
            let updatedTodos = state.todos.filter((item) => {
                if (item.completed === false) {
                    return item
                }
            })
            return {...state, todos: updatedTodos};
        }
        case "ADD_TODO": {
            console.log('add entered');
            let item = action.payload;
            console.log(item);
            let newTodo = {item: item, completed: false, id: Date.now()};
            console.log(newTodo);
            let newTodoList = [...state.todos, newTodo];
            console.log(newTodoList, 'new list')
            
            return {...state, todos: newTodoList}

        }
        default: 
            return state
    }
};
