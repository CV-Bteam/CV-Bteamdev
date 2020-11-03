import React from 'react'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'


const App = () => {
  return (
    <>
      <Header />
      <SignUp />
      <SignIn />
      <Form />
    </>
  )
}
export default App