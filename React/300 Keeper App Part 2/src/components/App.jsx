import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(e) // arrow function olarakta yapabilirdik.
{
  return(
    <Note key={e.key}
    title={e.title}
    content={e.content}/>
  )
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
