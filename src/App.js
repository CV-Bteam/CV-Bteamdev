import React from 'react'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Header from './components/templates/Header'
import Form from './components/pages/Form'
import slice from './reducks/list/listSlice'
import { useDispatch, useSelector } from 'react-redux'
import {useForm} from "react-hook-form"



function App () {
  const lists = useSelector(state => state.list);
  const {register, handleSubmit}=useForm()


  const dispatch = useDispatch();

    const addList = (date) => {
      dispatch(slice.actions.addList({ id: lists.length > 0 ? lists.reduce((a, b) => a.id > b.id ? a : b).id + 1 : 1, title: date.newListName }));
  };


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
