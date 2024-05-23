/*import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;*/
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { username, city, image, bio, github, linkedin } from './user';

function App() {
  return (
    <div>
      <Navbar />
      <Home username={Liza} city={Newyork} />
      <About image={image} bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;


