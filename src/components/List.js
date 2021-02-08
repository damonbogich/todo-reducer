import Todo from './Todo';
export default function List({state, dispatch}) {
    let todos = state.todos;
    console.log(todos)
    return (
        <div>
            {todos.map(item => {
                return <Todo key={item.id} item={item} dispatch={dispatch} />
            })}
        </div>
    )
}