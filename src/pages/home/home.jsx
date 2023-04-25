import './home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import HomeBanner from '../../components/Banner/Banner'
import imgBanner from './../../assets/banner.png'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'

export default function Home() {
	return (
			<>
			<Navbar />
			<div className='home'>
				<HomeBanner image={imgBanner} texte="Chez vous, partout et ailleurs" />
				<Gallery />
				<Footer />
			</div>
			</>
	)
}