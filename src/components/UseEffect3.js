import {useEffect} from "react";
import {Link} from "react-router-dom";

function UseEffect3() {
    useEffect(() => {
        return () => {
            console.clear()
            console.log("Unmounting the component and clearing the console")
        }
    }, []);

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <h1>useEffect use case # 3</h1>
            <p>Pay attention: When I go back, the console will be cleared and a new message will be logged</p>
        </>
    )
}

export default UseEffect3