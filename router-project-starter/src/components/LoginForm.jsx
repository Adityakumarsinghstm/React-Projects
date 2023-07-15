import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    Password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event)
  {
    event.preventDefault();
    setIsLoggedIn(true)
    toast.success("logged in")
    navigate("/dashboard")

  }
  return (
    <from onSubmit={submitHandler}>
      <label>
        <p>Email Id</p>
        <sup>*</sup>
        <input
          required
          type="email"
          value={formData.email}
          placeholder="Enter email Id"
          onChange={changeHandler}
          name="email"
        ></input>
      </label>
      <label>
        <p>Password</p>
        <sup>*</sup>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.Password}
          placeholder="Enter password"
          onChange={changeHandler}
          name="password"
        ></input>
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">
          <p>forget password</p>
        </Link>
      </label>
      <button>Sign In</button>
    </from>
  );
}

export default LoginForm;
