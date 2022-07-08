import { useContext } from "react";
import { SearchInputContext } from "../contexts/SearchInputContext";
export const SearchInput = ({ memorizeFn}) => {
    

    const { searchInput, handleInput } = useContext(SearchInputContext);
    
    function handleChange(e) {
    
        memorizeFn(e.target.value);
        handleInput(e.target.value);
    
}

    return (<div>
        <input onChange={handleChange} style={{height:'40px',width:"380px",marginTop:"40px"}} type="text" placeholder="Search"/>
    </div>)
}