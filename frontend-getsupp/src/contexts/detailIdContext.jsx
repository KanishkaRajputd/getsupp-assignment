import { useState } from "react";
import { createContext } from "react";



export const   DetailIdContext = createContext();
export const  DetailIdContextProvider = ({ children }) => {
    
    const [userId, setUserID] = useState("");
    const handleUserId = (input) => {
        setUserID(input);
    }

    return (<DetailIdContext.Provider value={{userId,handleUserId}} >{ children }</DetailIdContext.Provider>)
}
