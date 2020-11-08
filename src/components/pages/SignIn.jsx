import React,{useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import firebase from '../../firebase/firebase'

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
  const [err, set_err] = useState();
  const classes = use_style();
  const {register,errors,handleSubmit} = useForm();
  const submit =async(data) => {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(() => {}, err => {
        switch(err.code){
          case 'auth/user-not-found':
            set_err('メールアドレスが違います') 
            break;
          case 'auth/wrong-password':
            set_err('パスワードが違います')  
            break;
        }
        console.log(err.code)
      });
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
        {err && <p className={classes.color}>{err}</p>}
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