import React, {useRef} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useForm } from "react-hook-form"

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  color: {
    color: "red",
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const { register, handleSubmit, errors, getValues} = useForm({});
  const submit = data => {
    console.log(data);
  };
  const passReg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  const mailReg = new RegExp("^([a-zA-Z0-9])+([a-zA-Z0-9-])*@([a-zA-Z0-9.-])+([a-zA-Z0-9._-]+)+$")

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="fullName"
                variant="outlined"
                fullWidth
                label="姓名"
                inputRef={register({
                  required:"姓名を入力してください",
                  minLength: {
                    value: 2,
                    message: "2文字以上入力してください"
                  }
                })}
              />
              {errors.fullName && <p className={classes.color}>{errors.fullName.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="メールアドレス"
                name="email"
                inputRef={register({
                  required:"メールアドレスを入力してください",
                  pattern:{
                    value: mailReg,
                    message: "正しいメールアドレスを入力してください"
                  }
                })}
              />
              {errors.email && <p className={classes.color}>{errors.email.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="パスワード"
                type="password"
                inputRef={register({
                  required: "パスワードを入力してください",
                  pattern: {
                  value: passReg,
                  message: "6文字以上かつ英数字、小文字、大文字を1つずつ含む必要があります"
                  }
                })}
              />
              {errors.password && <p className={classes.color}>{errors.password.message}</p>}
            </Grid>
             <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password_repeat"
                label="パスワードをもう一度入力してください"
                type="password"
                inputRef={register({
                  validate: value => {
                  if (value === getValues()["password"]) {
                  return true;
                  } else {
                  return "パスワードは一致していません";
                  }
                  }
                })}
              />
              {errors.password_repeat && <p className={classes.color}>{errors.password_repeat.message}</p>}
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="インスピレーションやマーケティングプロモーション、最新情報をメールで受け取る"
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                既にアカウントをお持ちの方はSign inして下さい
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}