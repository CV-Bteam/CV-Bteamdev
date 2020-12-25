import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const Listitem = ({ data, color }) => {
  const use_style = makeStyles({
    container: {
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
    },
    p: {
      maxWidth: "60px",
      paddingLeft: "20px"
    },
    star: {
      paddingRight: "20px"
    }
  });

  const classes = use_style();
  const str = data.rating;
  const result = Number(str);

  return (
    <div className={classes.container} >
      <Link className={classes.title + " " + classes.p} to={`/detail/${data.documentID}`}>
        {data.title}
      </Link>
      <div className={classes.star}>
        <Rating value={result} readOnly precision={0.5} />
      </div>
    </div>

  );
};

export default Listitem