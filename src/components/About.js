import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <img src={image} alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
