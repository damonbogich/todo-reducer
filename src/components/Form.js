
export default function Form({dispatch}) {
    return (
        <form>
            <input placeholder='New todo' />
            <button>Add todo</button>
            <button onClick={(e) => dispatch({type: "CLEAR_COMPLETED", payload: e})}>Clear Completed</button>
        </form>
    )
};