import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function UseEffect2() {
    const [state, setState] = useState(false)

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const responseJSON = await response.json()
            console.log(responseJSON)
        }
        fetchUsers()
    }, [state]);

    function changeStateHandler() {
        setState(previousState => !previousState)
    }

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <h1>The state is: {state.toString()}</h1>
            <button onClick={changeStateHandler}>Change State!</button>
        </>
    )
}

export default UseEffect2