import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  function clickHandler()
  {
     navigate("/support")
  }
  function backHandler()
  {
    navigate(-1);
  }
  return (
    <div>
      <div>About</div>
      <button onClick={clickHandler}>Move to Support page </button>
      <button onClick={backHandler}>Go back</button>
    </div>
    
  )
}

export default About