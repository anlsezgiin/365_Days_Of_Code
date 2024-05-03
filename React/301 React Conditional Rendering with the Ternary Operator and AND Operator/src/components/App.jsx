import React from "react";
import Login from "./Login";

let isLogin = true;
const time = new Date().getHours();
function App() {
  return (
    <div className="container">
      {time>17 && <h1>{time}</h1>}
      {isLogin ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
