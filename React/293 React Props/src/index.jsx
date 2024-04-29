import React from "react";
import ReactDOM from "react-dom";

function Card(props)
{
  return(
    <div>
    <h2>{props.name}</h2>
    <img
      src={props.src}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.mail}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="123456" mail="b@beyonce.com"/>
    <Card name="Jack Bauer" src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel="9876543" mail="j@jackbauer.com"/>
  </div>,
  document.getElementById("root")
);

