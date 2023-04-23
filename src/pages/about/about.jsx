import React from 'react';
import './about.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import {Banner} from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer.jsx';
import {Wrapper} from '../../components/Wrapper/Wrapper';


function About() {
	return (
		<>
		<Navbar />
		<Banner  />
		<div className='about_global'>
			<Wrapper />
			<Wrapper />
			<Wrapper />
			<Wrapper />
		</div>
		<Footer/>
		</>
	);
}
export default About;