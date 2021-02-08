
export default function Todo({dispatch, item}) {
    return (
        <p style={{textDecoration: item.completed ? 'line-through' : 'none' }} id={item.id} onClick={(e) => dispatch({type: 'TOGGLE_TODO', payload: e.target.id})}>{item.item}</p>
    )
}