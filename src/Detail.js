import React from 'react'
import img from './img/Alexander_III_of_Macedon.jpg'
// import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Card, CardMedia } from '@material-ui/core';
// import { spacing } from '@material-ui/system';
// import {useForm} from 'react-hook-form';
// import firebase from '../../firebase/firebase'
// import {useState,useEffect} from 'react'
// import { ErrorMessage } from '@hookform/error-message';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';


const usestyle =makeStyles((theme) => ({
  spacing:{
    spacing: 8,
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:theme.spacing(5)
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
  text2:{
    width: '100%'
  },
  flex1: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(6),
  },
  flex2:{
    display: 'flex',
    flexDirection: 'column',
    width : '50%',
    textAlign: 'center',
  },
  root :{
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





function Detail(){

  const classes=usestyle()

  return(
    <Container component='main'>
      <CssBaseline/>
      <div className={classes.paper}>
        <Typography component='h1' variant='h3'>
          詳細
        </Typography>
        <Grid container className={classes.flex1}>
          <Grid item xs={6} className={classes.flex2}>
            <h2 className={classes.title}>本のタイトル</h2>
            <Card  className={classes.root}>
              <CardMedia
                component='img'
                image={img}
                className={classes.img}
              />
            </Card>
          </Grid>
          <Grid item xs={6} className={classes.form1}>
            <p className={classes.paragraph}>アレクサンドロス3世（ギリシア語: Ἀλέξανδρος Γ'、紀元前356年7月20日 - 紀元前323年6月10日）、通称アレクサンドロス大王（ギリシア語: Ἀλέξανδρος ὁ Μέγας）は、古代ギリシャのアルゲアス朝マケドニア王国のバシレウス(王)（在位：紀元前336年 - 紀元前323年）である。また、コリントス同盟（ヘラス同盟）の盟主、エジプトのファラオも兼ねた。</p>
          </Grid>
        </Grid>
        <form className={classes.form2}>
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