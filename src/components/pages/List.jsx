import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Listitem from "../templates/Listitem";

const use_style = makeStyles((theme) => ({
  paper: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }
}));

export default function List() {
  const RED = '#99cccc'
  const BLUE = '#008080'
  const listitems = [
    { title: "JavaScript" },
    { title: "React" },
    { title: "Java" },
    { title: "PHP" },
    { title: "Pyson" },
    { title: "Ruby" },
    { title: "C言語" }
  ]
  const classes = use_style();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.form}>
          {listitems.map((listitem, index) => ((index % 2) !== 0 ?
            <Listitem color={RED} listitem={listitem} key={listitem.title} /> :
            <Listitem color={BLUE} listitem={listitem} key={listitem.title} />
          )
          )}
        </div>
      </div>
    </Container>
  );
}