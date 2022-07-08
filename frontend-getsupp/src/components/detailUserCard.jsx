import { useContext } from "react"
import { SetDetailContext } from "../contexts/setDetailDataContext";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { DetailPopContext } from "../contexts/detailOpen-closeContext";
export const DetailsCard = () => {
    const { DetailData } = useContext(SetDetailContext);
//     console.log(DetailData);
     const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

    const { open, handleClose, handleOpen } = useContext(DetailPopContext);


    return (<div>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
            <Box sx={style}>
                <div style={{ display: "flex" }} key={DetailData.id}>
                    <div>    <img style={{height:"100px",weight:"100px",borderRadius:"50%"}} src={ DetailData.image} /></div>
                    <div style={{marginLeft:"20px"}}>
                        <h4> {DetailData.name}</h4> 
                        
                        <div style={{ display: "flex" }}><p style={{ height: "15px", width: "15px", backgroundColor:"grey",borderRadius:"50%",margin:"5px"}}></p>{DetailData.species } - {DetailData.status}  </div>
                    </div>
                    <div onClick={handleClose} style={{marginTop:"-10px",marginLeft:"90px",color:"green",cursor:"pointer"}}>close</div>
                </div>
                <div style={{ borderTop: "2px solid grey",display: "flex" }}>
                    <div >
                        <p style={{ color: "grey",fontSize:"10px" }}>Gender</p>
                        <p style={{ fontSize: "15px" }}>{DetailData.gender}</p>
                        <p style={{ color: "grey", fontSize: "10px" }}>Species</p>
                        <p style={{ fontSize: "15px" }}>{DetailData.species}</p>
                        
                    </div>
                    <div style={{margin:"auto"}}>
                         <p style={{ color: "grey",fontSize:"10px" }}>Location</p>
                        <p style={{ fontSize: "15px" }}>{DetailData.origin.name}</p>
                        <p style={{ color: "grey", fontSize: "10px" }}>Origin</p>
                        <p style={{ fontSize: "15px" }}>{DetailData.origin.name}</p>
                    </div>
                    
                </div>
         </Box>
      </Modal>


    </div>)
}
