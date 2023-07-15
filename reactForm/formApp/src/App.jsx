import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // function changeFirstNameHandler(event)
  // {
  //   // console.log("printing firs name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }
  // function changeLastNameHandler(event)
  // {
  //   // console.log("printing last name")
  //   // console.log(event.target.value)
  //     setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "",
    comments: "", isVisible: true, mode:"", favCar:""
  });
  function changeHandler(event)
  {
    const { name, value, checked, type } = event.target
   
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked: value
      }
    });
  }

  function submitHandler(event)
  {
    event.preventDefault();
    console.log("finally printing the total value of form .......")
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='first name'  value={formData.firstName}
          name='firstName' onChange={changeHandler} />
        <br></br>
        <br></br>
        <input type='text' placeholder='first name' value={formData.lastName}
          name='lastName' onChange={changeHandler} />
        <br></br>
        <br></br>
        <input type="email" placeholder="Enter your email here" value={formData.email}
          name="email" onChange={changeHandler} />
        <br></br>
        <br></br>
        <textarea placeholder='enter your comment' name='comments'
          onChange={changeHandler} value={formData.comments}></textarea>
        <br></br>
        <br></br>
          <input type='checkbox' name='isVisible' id='isVisible' checked={formData.isVisible}
          onChange={changeHandler} />
        <label htmlFor='isVisible'> Am I visible ?? </label>
        <br />
        <br />
        <fieldset>
          <legend>Mod:</legend>
          <input
          type='radio'
          name='mode'
          id='Online-mode'
          value='Online-mode'
          onChange={changeHandler}
          checked={formData.mode === "Online-mode"}
        ></input>
        <label htmlFor='Online-mode'>Online Mode</label>

        <input
          type='radio'
          name='mode'
          id='Offline-mode'
          value='Offline-mode'
          onChange={changeHandler}
          checked={formData.mode === "Offline-mode"}
        ></input>
        <label htmlFor='Offline-mode'>Offline Mode</label>
        </fieldset>
        <label htmlFor='favCar'>Tell me your favourite car </label>
        <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
        </select>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
