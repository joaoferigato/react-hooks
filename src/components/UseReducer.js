import {useRef, useReducer} from "react";
import {Link} from "react-router-dom";

function reducer(state, action) {
    switch (action.type) {
        case "add-user":
            return {
                ...state,
                users: [...state.users, {name: action.payload.name, age: action.payload.age}],
                count: state.count + 1
            }
        case "remove-last-user":
            state.users.pop()
            return {
                ...state,
                users: [...state.users],
                count: state.count - 1
            }
        default:
            return state
    }
}

function UseState() {
    const [state, dispatch] = useReducer(reducer, {users: [], count: 0})
    const name = useRef("")
    const age = useRef("")

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <h1>Name:</h1>
            <input onChange={e => name.current = e.target.value}/>
            <h1>Age:</h1>
            <input onChange={e => age.current = e.target.value}/>
            <p>
                <button onClick={() => dispatch({type: "add-user", payload: {name: name.current, age: age.current}})}>
                    Add user
                </button>
            </p>
            <p>
                <button onClick={() => dispatch({type: "remove-last-user"})}>
                    Remove last user
                </button>
            </p>
            <h1>Users:</h1>
            <p>{JSON.stringify(state)}</p>
        </>
    )
}

export default UseState