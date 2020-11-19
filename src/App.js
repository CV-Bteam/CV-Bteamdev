import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'
import List from './components/pages/List'
import Detail from "./components/pages/Detail"
import { AuthProvider } from "./store/authStore";

function App() {


  return (
    <>
      <AuthProvider >
        <Header />
        <Router>
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
            <Route
              exact path="/detail"
              component={Detail}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  )
}
export default App
