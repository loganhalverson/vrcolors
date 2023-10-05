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
			<div className="flex flex-row items-center font-sans">
				<Menu />
			</div>
		</ThemeProvider>
	);
};
