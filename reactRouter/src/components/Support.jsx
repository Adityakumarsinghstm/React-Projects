import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate();
  function clickHandler()
  {
     navigate("/labs")
  }
  return (
    <div>
      <div>Support</div>
      <button onClick={clickHandler}>Move to Labs page</button>
    </div>
  
  )
}

export default Support