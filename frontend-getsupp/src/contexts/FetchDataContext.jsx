import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";



export const   GetDataContext = createContext();
export const GetDataContextProvider = ({ children }) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
       getData(); 
    },[])
   
    async function getData() {
        const data = await fetch(`https://rickandmortyapi.com/api/character/?name=&page=1`).then((d) => d.json());
        setData(data.results);
    } 
    function handleGetData(data) {
        setData(data);
    }
    

    return (<GetDataContext.Provider value={{ Data,handleGetData }} >{ children}</GetDataContext.Provider>)



}
