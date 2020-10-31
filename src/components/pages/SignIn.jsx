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
import { useForm } from 'react-hook-form';


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
  const { register, errors, handleSubmit } = useForm();
  const submit = (data) => console.log(data)


  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(submit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            inputRef={register({ required: true })}
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {errors.email && <p className={classes.color}>メールアドレスを入力してください</p>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            name="password"
            autoComplete="current-password"
            inputRef={register({ required: true })}
          />
          {errors.password && <p className={classes.color}>パスワードを入力してください</p>}
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="ログイン状態を保存する"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ログイン
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                パスワードを忘れた方はこちら
              </Link>
            </Grid>
            <Grid item >
              <Link href="#" variant="body2">
                {"新規登録"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}





