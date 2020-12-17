import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));


export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const user = firebase.auth().currentUser;
  
  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ color: '#e0f2f1', backgroundColor: '#004d40' }}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            チームB
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
