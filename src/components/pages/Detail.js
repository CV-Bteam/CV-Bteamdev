import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardMedia } from '@material-ui/core';
import {useSelector} from 'react-redux'

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

function Detail(docid) {
  const classes = usestyle()
   const datas = useSelector((state) => state.lists)
   const formid = datas.map((e) => e.documentID )
  const data = formid.find(element => "/detail/"+element === window.location.pathname)
  const data2= datas.find(element => element.documentID === data)

    
  
  return (
    <Container component='main'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h3'>
          詳細
        </Typography>
        <Grid container className={classes.flex1}>
          <Grid item xs={6} className={classes.flex2}>
          <h2 className={classes.title}>{data2?.title}</h2>
            <Card className={classes.root}>
              <CardMedia
                component='img'
                image={"datas.url"}
                className={classes.img}
              />
            </Card>
          </Grid>
          <Grid item xs={6} className={classes.form1}>
            <p className={classes.paragraph}>{data2?.text}</p>
          </Grid>
        </Grid>
        <form className={classes.form2} >
          <TextField
            className={classes.text2}
            label='コメント'
            variant='outlined'
            rows='4'
            multiline
          />
          <button
            className={classes.btn}
            justify='center'
          >
            コメントする
        </button>
        </form>
      </div>
    </Container>
  )
}



export default Detail