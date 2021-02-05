import Todo from './Todo';
export default function List({state}) {
    console.log(state, 'state in list');
    let todos = state.todos;
    return (
        <div>
            {todos.map(item => {
                return <Todo key={item.id} item={item} />
            })}
        </div>
    )
}