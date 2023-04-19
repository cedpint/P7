import React, { useEffect, useState } from 'react';
import "./Gallery.css"
import Cards from "../Cards/Cards.jsx"


function Gallery() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);
/* fetch all apartments to map them (20 items on the array)*/
  function fetchApartments() {
    fetch("database.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return (
    <div className= "Gallery">
        {apartments.map((apartment) => (
        <Cards key={apartment.id} title={ apartment.title } imageUrl={ apartment.cover} id= {apartment.id}/>))}
    </div>
  );
}

export default Gallery