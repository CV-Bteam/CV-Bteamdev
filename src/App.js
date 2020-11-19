import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'
import LoggedInRoute from './Auth/LoggedInRouter'
import {AuthProvider} from './Auth/AuthServise'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Router>
          <Switch>
            <LoggedInRoute exact path='/' component={Form} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
         </Switch>
       </Router>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App