
import './notFound.css'
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer  from '../../components/Footer/Footer.jsx';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<>
		<Navbar />
		<div className='notFound'>
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>Oups! La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='notFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
		<div className='notFoundFooter'>
		<Footer />
		</div>
		</>
	)
}
