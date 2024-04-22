//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
let situation;

const heading = {
    fontSize: "50px",
    fontWeight: "bold",
    borderBottom: "5px solid black",
    color: "black"
  };
  
if(currentTime<12)
{
    situation="Good Morning!"
    heading.color="red"
}
else if(currentTime>12 && currentTime<18)
{
    situation="Good Afternoon!"
    heading.color="green"
}
else
{
    situation="Good Night!"
    heading.color="blue"
}


ReactDOM.render(<h1 style={heading}>{situation}</h1>,document.getElementById("root"));
