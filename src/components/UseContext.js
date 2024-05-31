import {useContext} from "react";
import {Link} from "react-router-dom";

import {UserContext} from "../contexts/UserContextProvider";

function UseContext() {
    const {user, setUser} = useContext(UserContext)

    function addPermissionToUserHandler() {
        setUser({...user, permissions: [...user.permissions, "New permission"]})
    }

    return (
        <>
            <p><Link to="..">Back</Link></p>
            <button onClick={addPermissionToUserHandler}>Add permission to user</button>
            <h1>User Context:</h1>
            <p>{JSON.stringify(user)}</p>
        </>
    )
}

export default UseContext