import React, { useState } from "react";

function App() {

  const now = new Date().toLocaleTimeString("tr-TR");
  const [time, setTime] = useState(now);
 
  function updateTime() {
    const newTime = new Date().toLocaleTimeString("tr-TR");
    setTime(newTime);
  }
  // setInterval(updateTime,1000)
<<<<<<< HEAD
  return ( 
=======
  return (
>>>>>>> 1d614e00fa914b590dfe26ce3cf737b0cfecf3b7
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
