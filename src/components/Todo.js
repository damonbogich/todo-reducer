
export default function Todo({dispatch, item}) {
    return (
        <p id={item.id} onClick={(e) => dispatch({type: 'TOGGLE_TODO', payload: e.target.id})}>{item.item}</p>
    )
}