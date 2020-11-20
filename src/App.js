import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'
import LoggedInRoute from './Auth/LoggedInRouter'
import {AuthProvider} from './Auth/AuthServise'
import List from './components/pages/List'
import Detail from "./components/pages/Detail"

function App() {
  return (

    <>
      <AuthProvider >
        <Header />
        <Router>
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
