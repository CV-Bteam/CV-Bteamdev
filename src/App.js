import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'
import LoggedInRoute from './Auth/LoggedInRouter'
import { AuthProvider } from './Auth/AuthServise'
import List from './components/pages/List'
import Detail from "./components/pages/Detail"
import { fireStore } from "./firebase/firebase"
import { useDispatch, useSelector } from "react-redux"
import listSlice from "./reducks/list/listSlice"
function App() {
  const dispatch = useDispatch()

  const addlist=async()=>{ 
    await fireStore.collection('messages').onSnapshot((snapshot) => {
    const list = snapshot.docs.map((doc) => {
      return {
        documentID: doc.id,
        ...doc.data()
      }
    })
    dispatch(listSlice.actions.addList(list))
  })}
  useEffect(()=>{
    addlist()
  })

  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <LoggedInRoute exact path='/form' component={Form} />
            <Route
              exact path="/signup"
              component={SignUp}
            />
            <Route
              exact path="/signin"
              component={SignIn}
            />
            <Route
              exact path="/"
              component={List}
            />
            <Route
              exact path="/detail/:id"
              component={Detail}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;
