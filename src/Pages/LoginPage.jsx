import React from 'react'
import Login from '../Components/Login/Login'

const LoginPage = ({flag, setFlag}) => {
  return (
    <Login flag={flag} setFlag={setFlag} />
  )
}

export default LoginPage