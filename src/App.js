import React from 'react'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'
import List from './components/pages/List'

const App = () => {
  return (
    <>
      <Header />
      <SignIn />
      <SignUp />
      <Form />
      <List />
    </>
  )
}
export default App