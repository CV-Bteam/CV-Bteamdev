import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form';



const use_style = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8), 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

export default function Form() {

  const classes = use_style();
  const {register,errors,handleSubmit} = useForm();
  const submit =(data) => console.log(data)


  return (
 
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit(submit)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="タイトル"
            name="title"
            type="text"
            inputRef={register( {required: "タイトルを入力してください" })}
　　　　　　 />
          {errors.title && <p className={classes.color}>{"タイトルを入力してください"}</p>}
           

　　　　　　<TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="本のURL"
            type="url"
            name="url"
            inputRef={register({ required: true })}
          />　
          {errors.url && <p className={classes.color}>本のURLを入力してください</p>}
          
          <TextField
            variant="outlined"
            margin="normal" 
            fullWidth
            label="本の詳細"
            type="text"
            name="detail"
            inputRef={register({ required: true })}
          />
          {errors.detail && <p className={classes.color}>本の詳細を入力してください</p>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          追加
          </Button>
        </form>
      </div>
      
    </Container>
  );
}

