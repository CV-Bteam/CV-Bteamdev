import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const use_style = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  List: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }
}));

export default function List() {
  const listitem = ["JavaScript", "React", "Java", "PHP", "Pyson", "Ruby", "C言語"]
  const classes = use_style();

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <ul className={classes.List}>
          {listitem.map(value => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}