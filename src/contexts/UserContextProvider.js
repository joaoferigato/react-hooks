import {createContext, useState} from "react"

export const UserContext = createContext()

export default function UserContextProvider({children}) {
    const [user, setUser] = useState({user: "User Name", login: "user_name", permissions: []})

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}