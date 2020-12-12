import React, { useState, useContext } from 'react';
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
import firebase, { fireStorage } from '../../firebase/firebase';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../Auth/AuthServise'


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
  err_color: {
    color: 'red',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalpaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 10, 10),
  },
  Iconbutton: {
    color: 'white',
    fontSize: '100%',
    width: '100%',
    margin: theme.spacing(3, 0, 1),
    padding: theme.spacing(1, 4, 1),
    borderRadius: 5,
    boxShadow: theme.shadows[2],
  },
  icon: {
    width: '300px',
    height: '300px',
    marginTop: '100px',
    marginLeft: '100px',
    border: '1px solid #000',
  },
}));


export default function SignUp() {
  const classes = useStyles();
  const history = useHistory()
  const user = useContext(AuthContext);

  const { register, handleSubmit, errors, getValues } = useForm({});
  const [err, set_err] = useState();
  const submit = async (data) => {
    const providers = await firebase
      .auth()
      .fetchSignInMethodsForEmail(data.email);
    if (
      providers.findIndex(
        (p) =>
          p === firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
      ) !== -1
    ) {
      set_err('このメールアドレスは既に使用されています');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(({ user }) => {
          if (file === null) {
            user.updateProfile({
              displayName: data.userName,
            });
            history.push('/')
          } else {
            fireStorage.ref().child(user.uid).put(file).then((snapshot) => {
              snapshot.ref.getDownloadURL()
            }).then((downloadURL) => {
              user.updateProfile({
                displayName: data.userName,
                photoURL: downloadURL,
              });
              history.push('/')

            }).catch((er) => {
              console.log(er)
            })
          }
        });
    }
  };
  const passReg = new RegExp(
    '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
  );
  const mailReg = new RegExp(
    '^([a-zA-Z0-9])+([a-zA-Z0-9-])*@([a-zA-Z0-9.-])+([a-zA-Z0-9._-]+)+$'
  );

  const createObjectURL =
    (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
  const [open, setOpen] = React.useState(false);
  const [Icon, setIcon] = React.useState(null)
  const [file, setfile] = React.useState(null)
  const handleChengefile = (e) => {
    let file = e.target.files
    let img_url = createObjectURL(file[0])
    setIcon(img_url);
    let newfile = new File([file[0]], "./myphoto.jpg")
    setfile(newfile)
    console.log(newfile)
  }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          SIGN UP
        </Typography>
        {err && <p className={classes.err_color}>{err}</p>}
        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="userName"
                variant="outlined"
                fullWidth
                label="ユーザー名"
                type="user"
                inputRef={register({
                  required: 'ユーザー名を入力してください',
                  minLength: {
                    value: 1,
                    message: '１文字以上入力してください',
                  },
                })}
              />
              {errors.userName && (
                <p className={classes.err_color}>{errors.userName.message}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="メールアドレス"
                name="email"
                inputRef={register({
                  required: 'メールアドレスを入力してください',
                  pattern: {
                    value: mailReg,
                    message: '正しいメールアドレスを入力してください',
                  },
                })}
              />
              {errors.email && (
                <p className={classes.err_color}>{errors.email.message}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="パスワード"
                inputRef={register({
                  required: 'パスワードを入力してください',
                  pattern: {
                    value: passReg,
                    message:
                      '6文字以上かつ英数字、小文字、大文字を1つずつ含む必要があります',
                  },
                })}
              />
              {errors.password && (
                <p className={classes.err_color}>{errors.password.message}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password_repeat"
                label="パスワードをもう一度入力してください"
                type="password"
                inputRef={register({
                  validate: (value) => {
                    if (value === getValues()['password']) {
                      return true;
                    } else {
                      return 'パスワードは一致していません';
                    }
                  },
                })}
              />
              {errors.password_repeat && (
                <p className={classes.err_color}>
                  {errors.password_repeat.message}
                </p>
              )}
            </Grid>
          </Grid>
          <div>
            <Button
              className={classes.Iconbutton}
              color="primary"
              style={{ backgroundColor: '#004d40' }}
              onClick={handleOpen}
            >
              {' '}
              Icon Upload
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.modalpaper}>
                  <div id="transition-modal-title">
                    <img src={Icon} className={classes.icon} />
                    <input
                      type="file"
                      id="example"
                      multiple
                      onChange={handleChengefile}
                      accept="image/*"
                    />
                    <Button onClick={handleClose}>閉じる</Button>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            color="primary"
            style={{ backgroundColor: '#004d40' }}
          >
            SIGN UP
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin">
                既にアカウントをお持ちの方はSIGN INして下さい
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
