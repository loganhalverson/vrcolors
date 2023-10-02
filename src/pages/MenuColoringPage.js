import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { DynamicBackground } from '../components/DynamicBackground';
import { Sidebar } from '../components/Sidebar';
import { Menu } from '../components/Menu';

export const MenuColoringPage = () => {
	return (
		<ThemeProvider>
			<DynamicBackground>
				<Sidebar />
				<Menu />
			</DynamicBackground>
		</ThemeProvider>
	);
};
