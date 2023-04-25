import React, { useEffect, useState } from 'react';
import './apartments.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import {Carrousel} from '../../components/Carrousel/Carrousel.jsx'
import {ApartmentHeader} from '../../components/ApartmentHeader/ApartmentHeader.jsx'
import {Collapse} from '../../components/Collapse/Collapse.jsx'
import { useLocation } from "react-router-dom";


 function Apartments() {

	/*retieve location.state.apartmentId */
	const location = useLocation ();
	
	const [flat, setFlat] = useState (null);
	/*useEffect = component loading */
	/* parameters (Fonction + [] dependencies array when is empty = loading just one time)*/
	useEffect(fetchApartmentData,[]);
	/*Id find and retriev selected apartment by unique Id using "FIND" */
	function fetchApartmentData() {
		fetch("database.json")
      	.then((res) => res.json())
      	.then((flats) => {
	  		const flat = flats.find((flat) => flat.id === location.state.apartmentId);
			setFlat(flat);
		})
      	.catch(console.error);
	}
	/*loading datas cause of the .cover in the Image Banner + (null) in the useState line 16*/
	if (flat == null) return <div>loading...</div>;
	return (
		<> 
			<Navbar />
			<div className='apartment-card'>
				<Carrousel pictures={flat.pictures} />
				<ApartmentHeader flat={flat}/>
				<div className='collapse-description-global'>
					<Collapse title="Description" content={flat.description}/>
					<Collapse title="Equipements" content={flat.equipments}/>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Apartments;