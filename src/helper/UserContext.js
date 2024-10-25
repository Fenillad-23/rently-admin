import {createContext} from "react";
const UserContext = createContext(undefined);
const user=useState({
    name : "john"
})

export const UserProvider = ({children}) => {
        return <UserContext.Provider value={{user}}></UserContext.Provider>} 

export const useUser = () =>useContext(UserContext);