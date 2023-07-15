import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [name, setName] = useState('aditya')
  function changeHandler(event)
  {
    console.log(text)
    setText(event.target.value)
  }
  //variation 1 -> Every Render
  // useEffect(() => {
  //   console.log("Ui rendering done....")
  // })

  //variation 2 -> First Render
  // useEffect(() => {
  //   console.log("UI rendering done...")
  // },[])

  //variation 3 -> whenever dependency change
  // useEffect(() => {
  //   console.log("change observed......")
  // },[name])

  //variation 4 -> to handle an unamounting of a component
  useEffect(() => {
    //added a event listener....
    console.log("listener added...")
    return () => {
      console.log("listener removed.....")
    }
  },[text])
  return (
    <div className='App'>
      <input type='text' onChange={changeHandler}></input>
    </div>
  )
}

export default App
