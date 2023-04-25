import React, { useEffect, useState } from 'react';
import "./Gallery.css"
import Cards from "../Cards/Cards.jsx"


function Gallery() {
  const [apartments, setApartments] = useState([]);

  /*1 UsEffect [] just each time when loadin the page*/
  useEffect(fetchApartments, []);
/*2 json fetch + setApartments*/
  function fetchApartments() {
    fetch("database.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return (
    /*3 map all apartments(array length 20 items) and retrieve props*/
    <div className= "Gallery">
        {apartments.map((apartment) => (
        <Cards key={apartment.id} title={ apartment.title } imageUrl={ apartment.cover } id= {apartment.id}/>))}
    </div>
  );
}

export default Gallery