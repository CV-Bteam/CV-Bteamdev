import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from "@material-ui/core/styles"
import firebase from '../../firebase/firebase'

const Listitem = ({listitem,color}) => {
  const use_style = makeStyles({
    container:{
      fontSize: "16px",
      backgroundColor: color,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }})

  const classes = use_style()

  const [ListItem, setListItem]

  firebase
    .firestore()
    .collection('listitem')
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
    const newTodos =  snapshot.docs.map((listitem) => ({
      id: listitem.id,
      ListItem: listitem.data().ListItem,
      }))
      setListItem(newTodos)
    })
    console.log(listitem)

  return (
    <div className={classes.container}>
      <h4>title</h4>
      <p>{listitem.title}</p>
      <div><Rating readOnly /></div>
    </div>
  )
}

export default Listitem