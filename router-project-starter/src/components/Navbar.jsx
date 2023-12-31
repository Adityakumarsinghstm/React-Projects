import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import {toast} from "react-hot-toast"

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
      <div className="flex justify-evenly">
          <Link>
           <img src={logo} alt='Logo' width={160} height={32} loading="lazy"></img>
          </Link>

          <nav>
              <ul className="flex gap-3">
                  <li>
                   <Link to="/">Home</Link>
                  </li>
                  <li>
                  <Link to="/">About</Link>
                  </li>
                  <li>
                  <Link to="/">Contact</Link>
                  </li>
                  
              </ul>
          </nav>

          {/*   login - signup - logout - dashboard */}
          
          <div className="flex ml-5 mr-3 gap-3">
              {
                  !isLoggedIn &&
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
              }
              {
                  !isLoggedIn &&
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              }
              {
                  isLoggedIn &&
                <Link to="/">
                          <button onClick={() => {
                              setIsLoggedIn("false")
                              toast.success("logged out")
                          }
                        }>Logout</button>
                </Link>
              }
              {
                  isLoggedIn &&
                <Link to="/dashboard">
                  <button>Dashboard</button>
                </Link>
              }
              
          </div>
          
          
      </div>
  )
}

export default Navbar