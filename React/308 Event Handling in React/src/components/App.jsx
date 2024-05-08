import React, { useState } from "react";

function App() 
{
  const [text,setText] = useState("Hello")
  const [on, setOn] = useState(true);

  function mouseOn()
  {
    setOn(true);
  }
  function mouseOff()
  {
    setOn(false)
  }

  function changeText()
  {
    setText("Submitted")
  }
  return(
    <div className="container">
      <h1>{text}</h1>
      <input />
      <button
        style={{ backgroundColor: on ? "black" : "white" }}
        onClick={changeText}
        onMouseOver={mouseOn}
        onMouseOut={mouseOff}
      >
        Submit
        </button>
    </div>
    

  ) 
}

export default App;
