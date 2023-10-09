import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '../context/ThemeContext';
import { HoverProvider } from '../context/HoverContext';
import { DynamicBackground } from '../components/DynamicBackground';
import { Menu } from '../components/Menu';
import { Navbar } from '../components/Navbar';

export const MenuColoringPage = () => {
	return (
		<ThemeProvider>
			<HoverProvider>
				<ToastContainer />
				<DynamicBackground />
				<Navbar currentPage={'Home'} colorFunctionality />
				<Menu />
			</HoverProvider>
		</ThemeProvider>
	);
};
