import React from 'react';
import Rating from '@material-ui/lab/Rating';



const Listitem =({listitem,color})=> {
    const container = {
      fontSize: "16px",
      backgroundColor: color,
      display:"flex",
      justifyContent:"space-around",
      alignItems:"center"
    }
    
    

  

    return(
      <div style={container}>
      
      
      <h4>title</h4>
        <p>{listitem.title}</p>
           <div><Rating readOnly /></div>
    
      </div>
  
    )  
}

export default Listitem