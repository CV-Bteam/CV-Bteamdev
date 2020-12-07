import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const Listitem = ({ color, docid }) => {
  const listitems = useSelector((state) => state.lists);
  // console.log(listitems)
  const listitem = listitems.find((e) => e.documentID === docid);
  console.log(listitem);
  const use_style = makeStyles({
    container: {
      fontSize: '16px',
      backgroundColor: color,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    title: {
      textDecoration: 'none',
      color: 'black'
    }
  });

  const classes = use_style();

  return (
    <div className={classes.container}>
      <h4>title</h4>
      <Link className={classes.title} to={`/detail/${docid}`}>
        {listitem?.title}
      </Link>
      <div>
        <Rating readOnly />
      </div>
    </div>
  );
};

export default Listitem;
