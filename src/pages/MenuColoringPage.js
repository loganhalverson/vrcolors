import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { HoverProvider } from '../context/HoverContext';
import { DynamicBackground } from '../components/DynamicBackground';
import { Menu } from '../components/Menu';
import { Navbar } from '../components/Navbar';

export const MenuColoringPage = () => {
	return (
		<ThemeProvider>
			<HoverProvider>
				<DynamicBackground />
				<Navbar currentPage={'Home'} colorFunctionality />
				<Menu />
			</HoverProvider>
		</ThemeProvider>
	);
};
