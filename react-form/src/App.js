import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications:""
  })
  function changeHandler(event)
  {
    const { name, value, checked, type } = event.target
    setFormData((prevData) => ({...prevData , [name]: type === "checkbox" ? checked :value} ))
  }
  function submitHandler(event)
  {
    event.preventDefault();
    console.log("Printing Form Data :");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br></br>
        <input type="text" name="firstName" value={formData.firstName}
          id="firstName" onChange={changeHandler} placeholder="aditya"
          className="outline"
        ></input>

        <br></br>
        <label htmlFor="lastName">Last Name</label>
        <br></br>
        <input type="text" name="lastName" value={formData.lastName}
          id="lastName" onChange={changeHandler} placeholder="singh"
          className="outline"
        ></input>

        <br></br>
        <label htmlFor="email">Email Address</label>
        <br></br>
        <input type="email" name="email" value={formData.email}
          id="email" onChange={changeHandler} placeholder="aditya@abc.com"
          className="outline"
        ></input>

        <br></br>
        <label htmlFor="country">Country</label>
        <br></br>
        <select name="country" id="country" value={formData.country}
           onChange={changeHandler} className="outline">
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Maxico</option>
        </select>

        <br></br>
        <label htmlFor="streetAddress">Street Address</label>
        <br></br>
        <input type="text" name="streetAddress" value={formData.streetAddress}
          id="streetAddress" onChange={changeHandler} placeholder="B25-C"
          className="outline"
        ></input>

         <br></br>
        <label htmlFor="city">City</label>
        <br></br>
        <input type="text" name="city" value={formData.city}
          id="city" onChange={changeHandler} placeholder="Sitamarhi"
          className="outline"
        ></input>

         <br></br>
        <label htmlFor="state">State / Province</label>
        <br></br>
        <input type="text" name="state" value={formData.state}
          id="state" onChange={changeHandler} placeholder="Bihar"
          className="outline"
        ></input>

          <br></br>
        <label htmlFor="postalCode">Postal Code</label>
        <br></br>
        <input type="text" name="postalCode" value={formData.postalCode}
          id="postalCode" onChange={changeHandler} placeholder="843315"
          className="outline"
        ></input>


        <br></br>
        <br></br>

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
          <input
            id="comments" type="checkbox" name="comments" checked={formData.comments}
          onChange={changeHandler}>
          </input>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
          </div>

          <div className="flex">
          <input
            id="candidates" type="checkbox" name="candidates" checked={formData.candidates}
          onChange={changeHandler}>
          </input>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
          </div>


          <div className="flex">
          <input
            id="offers" type="checkbox" name="offers" checked={formData.offers}
          onChange={changeHandler}>
          </input>
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer .</p>
          </div>
          </div>
          
        </fieldset>

        <br></br>
        <br></br>
        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone. </p>

          <input
            type="radio" id="pushEverything" name="pushNotifications" value="Everything"
            onChange={changeHandler}></input>
          <label htmlFor="pushEverything">Everything</label>
           <br></br>

          <input
            type="radio" id="pushEmail" name="pushNotifications" value="same as email"
            onChange={changeHandler}></input>
          <label htmlFor="pushEmail">Same as Email</label>
          <br></br>
          
          <input
          type="radio" id="pushNothing" name="pushNotifications" value="No push Notifications"
          onChange={changeHandler}></input>
        <label htmlFor="pushNothing">No push Notifications</label>


        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>

      </form>
    </div>
  );
}

export default App;
