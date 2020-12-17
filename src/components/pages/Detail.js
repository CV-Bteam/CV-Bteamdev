import React, { useContext } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardMedia } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import firebase from "../../firebase/firebase"
import { AuthContext } from "../../Auth/AuthServise"
import Comments from "../../components/templates/Comments"
const usestyle = makeStyles((theme) => ({
  spacing: {
    spacing: 8,
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(5)
  },
  form1: {
    width: '50%',
    marginTop: theme.spacing(3),
    backgroundColor: 'lightgrey',
    padding: '40px',
    zIndex: '10',
    borderRadius: '50%'
  },
  form2: {
    width: '70%',
    marginTop: theme.spacing(3),
  },
  text1: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  text2: {
    width: '100%'
  },
  flex1: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(6),
  },
  flex2: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    textAlign: 'center',
  },
  root: {
    width: '100%',
    boxShadow: 'initial',
    backgroundColor: 'initial'
  },
  img: {
    width: '50%',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',

  },
  paragraph: {
    fontSize: 'large',
    lineHeight: '2.5',
    fontFamily: '-apple-system',
    fontWeight: 'bold'
  },
  btn: {
    display: 'flex',
    justify: 'center',
    margin: '0 auto',
    backgroundColor: 'rgb(0,77,64)',
    color: 'white',
    border: 'none',
    padding: '10px 40px',
    marginTop: '30px',
    borderRadius: '5px'
  }
}))

function Detail() {
  const user = useContext(AuthContext)
  const { register, handleSubmit, reset } = useForm()
  const classes = usestyle()
  const { id } = useParams()
  const lists = useSelector(state => state.lists)
  const data = lists.find(list => list.documentID === id)
  const submit = (data) => {
    const date = new Date()
    firebase.firestore().collection('comments').add({
      comment: data.comment,
      bookid: id,
      user: user.uid,
      created_at: date
    });
    reset()
  }
  return (
    <Container component='main'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h3'>
          詳細
        </Typography>
        <Grid container className={classes.flex1}>
          <Grid item xs={6} className={classes.flex2}>
            <h2 className={classes.title}>{data?.title}</h2>
            <Card className={classes.root}>
              <CardMedia
                component='img'
                image={"datas.url"}
                className={classes.img}
              />
            </Card>
          </Grid>
          <Grid item xs={6} className={classes.form1}>
            <p className={classes.paragraph}>{data?.text}</p>
          </Grid>
        </Grid>
        {user &&
          <>
            <form onSubmit={handleSubmit(submit)} className={classes.form2} >
              <TextField
                name="comment"
                className={classes.text2}
                label='コメント'
                variant='outlined'
                rows='4'
                multiline
                inputRef={register({ required: true })}
              />
              <button
                type="submit"
                className={classes.btn}
                justify='center'
              >
                コメントする
        </button>
            </form>
            <Comments bookid={id} />
          </>
        }
      </div>
    </Container>
  )
}



export default Detail