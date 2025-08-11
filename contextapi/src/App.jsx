import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UsercontextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
function App() {


  return (
    <>
      <UserContextProvider>
        <h1>Understanding Context API.</h1>

        <Login />
        <Profile />

      </UserContextProvider>
    </>
  )
}

export default App
