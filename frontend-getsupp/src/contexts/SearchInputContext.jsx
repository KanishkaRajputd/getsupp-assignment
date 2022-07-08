
import { createContext, useState } from "react";
export const SearchInputContext = createContext();


export const SearchInputContextProvider = ({ children }) => {
   const [searchInput, setSearchInput] = useState("");
   function handleInput(data) {
      setSearchInput(data);
  }
   return (<SearchInputContext.Provider value={{searchInput,handleInput}}>
      {children}
   </SearchInputContext.Provider>)
}