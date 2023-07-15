import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

function Login({setIsLoggedIn}) {
  return (
    <Template
      title="Welcome back"
      desc1="build skill for today, tomorrow and beyond."
      desc2="education to future-proof your carrer."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}


    />
  )
}

export default Login