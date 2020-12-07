import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Listitem from '../templates/Listitem';
import { useSelector } from 'react-redux';
import Pagenation from '@material-ui/lab/Pagination';
import { useEffect } from 'react';
import firebase from '../../firebase/firebase';

const use_style = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function List() {
  const [pagenumber, set_pagenumber] = useState(0);
  const RED = '#99cccc';
  const BLUE = '#008080';
  const MAX = 9;
  const classes = use_style();
  const [idurl, setIdUrl] = useState([]);
  const list = useSelector((state) => state.lists);
  const sliceByNumber = (array, number) => {
    const length = Math.ceil(array.length / number);
    return new Array(length)
      .fill()
      .map((_, i) => array.slice(i * number, (i + 1) * number));
  };
  const tenList = sliceByNumber(list, MAX);
  const listcount = Math.ceil(list.length / 10);
  // console.log(listcount)
  const pageChange = (e, value) => {
    set_pagenumber(value - 1);
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection('/messages')
      .onSnapshot((snapshot) => {
        const docid = snapshot.docs.map((doc) => {
          return doc.id;
        });
        setIdUrl(docid);
      });
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.form}>
          {idurl.map((docid, index) =>
            index % 2 !== 0 ? (
              <Listitem color={RED} docid={docid} key={docid} />
            ) : (
              <Listitem color={BLUE} docid={docid} key={docid} />
            )
          )}
        </div>
        <Pagenation count={listcount} onChange={pageChange} color="primary" />
      </div>
    </Container>
  );
}
