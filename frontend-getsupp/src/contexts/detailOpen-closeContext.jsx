import { useState } from "react";
import { createContext } from "react";

export const DetailPopContext = createContext();
export const DetailPopContextProvider = ({children}) => {
    
    const [open, setOpen] = useState(false);
    function handleClose() {
        setOpen(false);
    }
    function handleOpen() {
        setOpen(true);
    }

    return (<DetailPopContext.Provider value={{open,handleClose,handleOpen}}>{ children}</DetailPopContext.Provider>)
}