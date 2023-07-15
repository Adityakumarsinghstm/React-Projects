import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Template({ title, desc1, desc2, formType, image, setIsLoggedIn }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
        </p>
        <p>
          <span>{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div>
        <img
          src={frameImage}
          alt="pattern"
          height={504}
          width={558}
          loading="lazy"
        ></img>
        <img
          src={image}
          alt="students"
          height={490}
          width={558}
          loading="lazy"
        ></img>
      </div>
    </div>
  );
}

export default Template;
