import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from "@material-ui/core/styles"

const Listitem = ({data,color}) => {
  const use_style = makeStyles({
    container:{
      fontSize: "16px",
      backgroundColor: color,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }})

  const classes = use_style()

  return (
    <div className={classes.container}>
      <h4>title</h4>
      <p>{data?.title}</p>
      <div><Rating readOnly /></div>
    </div>
  )
}

export default Listitem