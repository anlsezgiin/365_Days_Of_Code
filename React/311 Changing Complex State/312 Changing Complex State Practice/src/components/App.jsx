import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  
  function changeHandler(event)
  {
    const newValue = event.target.value;
    const valueName = event.target.name;
    setContact(e=>{
      if(valueName==="fName")
        return {
          fName: newValue,
          lName: e.lName,
          email: e.email
        }
      else if(valueName==="lName")
        return {
          fName: e.fName,
          lName: newValue,
          email: e.email
        }
      else if(valueName==="email")
        return {
          fName: e.fName,
          lName: e.lName,
          email: newValue
        }  
    })
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" value={contact.fName} onChange={changeHandler}/>
        <input name="lName" placeholder="Last Name" value={contact.lName} onChange={changeHandler}/>
        <input name="email" placeholder="Email" value={contact.email} onChange={changeHandler}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events