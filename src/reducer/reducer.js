export const initialState = {
    todos: [
        {item: 'Learn about reducers', completed: false, id: 1},
        {item: 'Workout', completed: false, id: 2},
        {item: 'Eat a good breakfast', completed: false, id: 3}
    ]
};

export const reducer = (state, action) => {
    switch(action.type) {
        default: 
            return state
    }
};
