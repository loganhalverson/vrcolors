import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LandingPage } from './pages/LandingPage';
import { MenuColoringPage } from './pages/MenuColoringPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HowToPage } from './pages/HowToPage';
import './styles/index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/color/:paletteCode?',
		element: <MenuColoringPage />,
		loader: async () => {
			return localStorage.getItem('paletteCode');
		},
		errorElement: <NotFoundPage />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
	{
		path: '/how-to',
		element: <HowToPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
