import {useRef} from "react";
import {Link} from "react-router-dom";

function UseRef1() {
    const count = useRef(0)

    function changeValueHandler() {
        count.current = count.current + 1
        console.log(count.current)
    }

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <button onClick={changeValueHandler}>Change value</button>
        </>
    )
}

export default UseRef1