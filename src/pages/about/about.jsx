import React from 'react';
import './about.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import {Banner} from '../../components/Banner/Banner';
import imgBannerAbout from './../../assets/aboutbanner.png'
import Footer from '../../components/Footer/Footer.jsx';
import {Collapse} from '../../components/Collapse/Collapse';
import aboutData from "../../assets/aboutData";

	const About = () => {
		// Switch to display content in the dropdown by title
		const content = (title) => {
		  switch (title) {
			case "fiability":
			  return aboutData.fiability;
			case "respect":
			  return aboutData.respect;
			case "service":
			  return aboutData.service;
			case "sécurity":
			  return aboutData.security;
			default:
			  console.log("default");
			  break;
		  }
		};
	  
	return (
		<>
		<Navbar />
		<div className='about_global'>
		<Banner image={imgBannerAbout} titre="" />
			<Collapse title="Fiabilité" content={content("fiability")}/>
			<Collapse title="Respect" content={content("respect")}/>
			<Collapse title="Service"content={content("service")}/>
			<Collapse title="Sécurité"content={content("security")}/>
		</div>
		<Footer/>
		</>
	);
};
export default About;