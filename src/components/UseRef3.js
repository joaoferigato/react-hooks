import {useState, useRef} from "react";
import {Link} from "react-router-dom";

function UseRef3() {
    const [state, setState] = useState("")
    const previousState = useRef("");

    function changeInputHandler(e) {
        setState(e.target.value)
        previousState.current = state
    }

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <input onChange={changeInputHandler}/>
            <h1>Current value is:</h1>
            <p>{state}</p>
            <h1>Previous value is:</h1>
            <p>{previousState.current}</p>
        </>
    )
}

export default UseRef3