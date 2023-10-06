import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, redirect, Navigate, useNavigate } from 'react-router-dom';
import { MenuColoringPage } from './pages/MenuColoringPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HowToPage } from './pages/HowToPage';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/:paletteCode?',
		element: <MenuColoringPage />,
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
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
