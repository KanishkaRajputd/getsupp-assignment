import { useState } from "react";
import { createContext } from "react";


export const SetDetailContext = createContext();
export const SetDetailContextProvider = ({ children }) => {


    const [DetailData, setDetailData] = useState({});
    function handleDetailData(data) {
        setDetailData(data)
    }

    return (<SetDetailContext.Provider value={{DetailData,handleDetailData}}>{ children }</SetDetailContext.Provider>)
} 