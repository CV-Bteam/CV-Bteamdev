import React from 'react'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'
import { AuthProvider } from "./store/authStore";

const App = () => {
  return (
    <>
      <AuthProvider >
      <Header />
      <SignUp />
      <SignIn />
      <Form />
        </AuthProvider>
    </>
  )
}
export default App