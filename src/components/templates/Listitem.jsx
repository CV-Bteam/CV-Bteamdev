import React ,{useState}from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from "@material-ui/core/styles"

const Listitem = ({data,color}) => {
  const use_style = makeStyles({
    container:{
      fontSize: "16px",
      backgroundColor: color,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    title: {
      textDecoration: 'none',
      color: 'black',

      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis', 
    }

  });

  const classes = use_style();
  const str = data.rating;
  const result = parseInt(str);

  return (
  
    <div className={classes.container} >
       
      <h4>title</h4>
      <Link className={classes.title} to={`/detail/${listitem.documentID}`}>
        {listitem.title}
      </Link>
      
      <div>
        <Rating value={result} readOnly />
      </div>
      
    </div>
    
  );
};

export default Listitem