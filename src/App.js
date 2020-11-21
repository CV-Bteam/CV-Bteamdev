import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'
import List from './components/pages/List'
import slice from './reducks/list/listSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AuthProvider } from "./store/authStore";

function App() {
  const lists = useSelector(state => state.list);
  const dispatch = useDispatch();
  const addList = (date) => {
    dispatch(slice.actions.addList({ id: lists.length > 0 ? lists.reduce((a, b) => a.id > b.id ? a : b).id + 1 : 1, title: date.newListName }));
  };

  return (
    <>
      <AuthProvider >
        <Router>        
        <Header />
          <Switch>
            <Route
              exact path="/signup"
              component={SignUp}
            />
            <Route
              exact path="/signin"
              component={SignIn}
            />
            <Route
              exact path="/form"
              component={Form}
            />
            <Route
              exact path="/"
              component={List}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  )
}
export default App
