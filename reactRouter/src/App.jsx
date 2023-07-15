import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Labs from "./components/Labs";
import Support from "./components/Support";
import NotFound from "./components/NotFound";
import About from "./components/About";
import MainHeader from "./components/MainHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About />}></Route>
          <Route path="/labs" element={<Labs />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
