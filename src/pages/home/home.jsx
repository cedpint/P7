import './home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import HomeBanner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Navbar />
			<HomeBanner />
			<Gallery />
			<Footer />
		</div>
	)
}