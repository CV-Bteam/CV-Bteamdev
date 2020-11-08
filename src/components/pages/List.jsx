import { array } from 'prop-types';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




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
}));




export default function List() {
   const listitem =["JavaScript","React","Java","PHP","Pyson","Ruby","C言語"]
 
   const classes = use_style();
   const submit =(data) => console.log(data)

   return (

  <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
      <React.Fragment>
        <ul>
          {listitem.map(value=> (
              <li key={value}>{value}</li>
          ))}
       </ul>   
     </React.Fragment>
      
      </div>
  </Container>
    );
}