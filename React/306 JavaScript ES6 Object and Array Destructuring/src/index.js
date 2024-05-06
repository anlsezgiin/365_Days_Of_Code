// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice";
import animals from "./data";

// ANIMALS SORUNUNUN ÇÖZÜMÜ

const [cat,dog]=animals;
const {name: catName, sound: catSound} = cat; // cat.name or cat.sound same thing
const {name:dogName, sound: dogSound, hovhov = "AAAA"} = dog; // hovhov kısmındaki gibide yeni değer ekleyebiliriz.
console.log(catName)
console.log(hovhov)

// son olarak iç içe geçmiş nesnem varsa ne yapmalıyım?
const {feedingRequirements: {food:yemek , water:su}} = cat;
console.log(yemek);
console.log(su)

// OTOMOBİL SORUNUNUN ÇÖZÜMÜ

// const [honda, tesla] = cars;

// const {speedStats: { topSpeed: hondaTopSpeed }} = honda;
// const {speedStats: { topSpeed: teslaTopSpeed }} = tesla;

// const {coloursByPopularity: [hondaTopColour]} = honda;
// const {coloursByPopularity: [teslaTopColour]} = tesla;

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>
//   )