import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function UseEffect1() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const responseJSON = await response.json()
            console.log(responseJSON)
            setUser(responseJSON)
        }
        fetchUsers()
    }, []);

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <h1>Users:</h1>
            {user && user.name}
        </>
    )
}

export default UseEffect1