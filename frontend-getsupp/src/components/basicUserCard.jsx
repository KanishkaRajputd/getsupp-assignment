import { useContext,useCallback } from "react";
import { useEffect, useState } from "react"
import { DetailPopContext } from "../contexts/detailOpen-closeContext";
import { GetDataContext } from "../contexts/FetchDataContext";
import { SearchInputContext } from "../contexts/SearchInputContext";
import { SetDetailContext } from "../contexts/setDetailDataContext";
import { DetailsCard } from "./detailUserCard";
import { SearchInput } from "./search";
export const UserCard=()=>{
  const { Data, handleGetData } = useContext(GetDataContext);
   const [page,setPage]=useState(1);
  const { DetailData, handleDetailData } = useContext(SetDetailContext);
  const { open, handleClose, handleOpen } = useContext(DetailPopContext);
  const { searchInput } = useContext(SearchInputContext);

const [prevpage,setPrevpage]=useState(1);


  useEffect(() => {
    getData(searchInput);
  }, [page]);
    const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };
   
  async function getData(value) {
      
      const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}&page=${page}`).then((d) => d.json());
      if(data.results==undefined){
        return;
      }
  if (searchInput.length !== 0 && prevpage==page) {
      handleGetData(data.results);
    
    }else  if(searchInput.length !== 0 && prevpage!=page){
    
      handleGetData([...Data, ...data.results]);
      setPrevpage(page);
   
    }
    
  }
  function scrollToend(){
  
         setPage(page+1);
         
     }

   

window.onscroll=function (){
    if(window.innerHeight+document.documentElement.scrollTop === document.documentElement.offsetHeight){
        scrollToend();
    }
}

  
    const memorizeFn = useCallback(debounce(getData), [page]);

    return (<div>
        <SearchInput memorizeFn={ memorizeFn } />
      <div style={{ marginLeft: "35%", marginRight: "35%", marginTop: "2%" }}>
        {Data.map((e) => (
          <div onClick={() => {
            handleDetailData(e);
            handleOpen();
       
            console.log(open,DetailData)
      }}
           
            
            key={e.id} style={{ height: "80px", border: "2px solid white", display: "grid", gridTemplateColumns: "10% 62% 2% 15% 10%", cursor: "pointer" }}>
            <img style={{ height: "50px", width: "50px", borderRadius: "50%", margin: "10px" }} src={e.image} />
            <h5>{e.name}</h5>
            <div style={{height:"10px",width:'10px',borderRadius:"50%",backgroundColor:"green",marginTop:"28px"}}></div>
            <h6 style={{color:"grey"}}>{e.status}</h6>
            <h6 style={{color:"grey"}}>{ e.species}</h6>
       
          </div>
        ))}
      {open?<DetailsCard/>:""}
      </div>
</div>)

}
