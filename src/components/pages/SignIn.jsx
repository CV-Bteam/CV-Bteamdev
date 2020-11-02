import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form';
import firebase from '../../firebase/firebase'
import {useState,useEffect} from 'react'
import { ErrorMessage } from '@hookform/error-message';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const use_style = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  color: {
    color: 'red',
  }
}));

export default function SignIn() {
  const classes = use_style();

  const {register,errors,handleSubmit} = useForm();
  const submit =async(data) => {
    console.log(data.email)
    console.log(data.password)


    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
  }

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          SIGN IN
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(submit)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={register({ required: true })}
            label="メールアドレス"
            name="email"
          />
          {errors.email && <p className={classes.color}>メールアドレスを入力してください</p>}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="パスワード"
            type="password"
            name="password"
            inputRef={register({ required: true })}
          />

          {errors.password && <p className={classes.color}>パスワードを入力してください</p> }
         
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="ログイン状態を保存する"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ backgroundColor:"#004d40"}}
            className={classes.submit}
          >
            SIGN IN
          </Button>
          <Grid container justify='flex-end'>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                パスワードを忘れた方はこちら
              </Link>
            </Grid> */}
            <Grid item>
              <Link href="#" variant="body2" >
                SIGN UP
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}




