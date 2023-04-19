import React from 'react';
import './about.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import {ImgBanner} from '../../components/ImgBanner/ImgBanner.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import {Wrapper} from '../../components/Wrapper/Wrapper';
import  img from './../../assets/banner.png'


function About() {
	return (
		<>
		<Navbar />
		<ImgBanner imageUrl={img} />
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