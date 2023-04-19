import Home from './pages/home/home';
import Apartments from './pages/apartments/apartments';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/apartments",
		element: <Apartments />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <NotFound />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;