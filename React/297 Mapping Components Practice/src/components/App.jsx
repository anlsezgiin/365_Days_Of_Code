import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function MappingCard(element)
{ 
  return (
    <Card   key = {element.id}
            emoji={element.emoji}
            name={element.name}
            meaning={element.meaning}/>
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(MappingCard)}
      </dl>
    </div>
  );
}

export default App;
