import React from 'react';
import './about.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import {Wrapper} from '../../components/Wrapper/Wrapper';
import {Banner} from '../../components/Banner/Banner.jsx';

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