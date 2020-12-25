import React from 'react';
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
    p: {
      maxWidth: "60%",
      paddingLeft: "20px"
    },
    star: {
      paddingRight: "20px"
    }
  })

  const classes = use_style()

  return (
    <div className={classes.container}>
      <p className={classes.p}>{data?.title}</p>
      <div className={classes.star}><Rating readOnly /></div>
    </div>
  )
}

export default Listitem