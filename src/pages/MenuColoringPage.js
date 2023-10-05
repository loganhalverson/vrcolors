import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { DynamicBackground } from '../components/DynamicBackground';
import { Menu } from '../components/Menu';
import { Navbar } from '../components/Navbar';

export const MenuColoringPage = () => {
	return (
		<ThemeProvider>
			<DynamicBackground />
			<Navbar currentPage={'Home'} colorFunctionality />
			<Menu />
		</ThemeProvider>
	);
};
