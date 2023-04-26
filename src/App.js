import Home from './pages/home/home';
import Apartments from './pages/apartments/apartments';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />, errorElement: <NotFound />
	},
	{
		path: "/apartments",
		element: <Apartments />, errorElement: <NotFound />
	},
	{
		path: '/about',
		element: <About />, errorElement: <NotFound />
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