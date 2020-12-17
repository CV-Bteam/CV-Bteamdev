import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';
import 'firebase/auth';
import { Link,useHistory } from "react-router-dom"
import { AuthContext } from '../../Auth/AuthServise';
import Button from '@material-ui/core/Button';
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
  flex: {
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "20px"
  },
  button: {
    color: "#fff"
  },
  right: {
    marginRight: "40px"
  }
}));


export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const user = useContext(AuthContext)
  const history=useHistory()
  const logout = () => {
    firebase.auth().signOut()
  }

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ color: '#e0f2f1', backgroundColor: '#004d40' }}
      >
        <Toolbar className={classes.flex}>
          <Typography onClick={()=>{history.push("/")}} className={classes.title} variant="h6" noWrap>
            チームB
          </Typography>
          <div className={classes.flex}>
            {user ?
              <>
              <Button className={classes.button +" "+ classes.right} onClick={()=>{history.push("/form")}}>投稿</Button>
                <h3 className={classes.right}>{user.displayName}</h3>
                <Button className={classes.button} onClick={logout}>logout</Button>
              </>
              :
              <Link className={classes.link} to={"/signin"}>signin</Link>}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
