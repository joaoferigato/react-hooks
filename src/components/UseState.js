import {useState} from "react";
import {Link} from "react-router-dom";

function UseState() {
    const [value, setValue] = useState(false)

    function changeValueHandler() {
        setValue(true)
    }

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <h1>The value is {value.toString()}</h1>
            <button onClick={changeValueHandler}>Change value</button>
        </>
    )
}

export default UseState