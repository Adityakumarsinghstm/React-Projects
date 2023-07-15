import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"

function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="Join the millions learning to code with studyNotion for free"
    desc1="build skill for today, tomorrow and beyond."
    desc2="Education to future-proof your carrer."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}


  />
  )
}

export default Signup