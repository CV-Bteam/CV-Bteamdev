
import React, { useContext, useEffect, useState } from 'react';
import { fireStore } from "../../firebase/firebase"
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { AuthContext } from "../../Auth/AuthServise"

const use_style = makeStyles({
  comments: {
    width: "60%"
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
});


const Comments = ({ bookid }) => {
  const classes = use_style()
  const [comments, set_comments] = useState()
  const user = useContext(AuthContext)
  useEffect(() => {
    fireStore.collection("comments").where("bookid", "==", bookid).onSnapshot((snapshot) => {
      const comments = snapshot.docs.map((doc) => {
        return ({ commentid: doc.id, ...doc.data() })
      })
      set_comments(comments)
    })
    return function cleanup() {
      set_comments("")
    }
  }, [bookid])
  const comment_delete = (id) => {
    fireStore.collection("comments").doc(id).delete()
  }
  const sortcomments = comments?.sort((a, b) => {
    return a.created_at - b.created_at
  })
  return (
    <div className={classes.comments}>
      {sortcomments?.map((comment) => {
        return (
          <div key={comment.commentid} className={classes.container}>
            <p>{comment.comment}</p>
            {user.uid === comment.user && <IconButton onClick={() => comment_delete(comment.commentid)} aria-label="delete">
              <DeleteIcon />
            </IconButton>}
          </div>
        )
      })}
    </div>
  );
}

export default Comments;