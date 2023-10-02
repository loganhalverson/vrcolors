import React from 'react';
import { Menu } from '../components/Menu';
import { Sidebar } from '../components/Sidebar';
import { ThemeProvider } from '../context/ThemeContext';

export const MenuColoringPage = () => {
	return (
		<div className="flex min-h-screen flex-row items-center bg-gradient-to-r from-neutral-100 from-10% via-blue-200  to-neutral-100 to-90% font-sans">
			<ThemeProvider>
				<Sidebar />
				<Menu />
			</ThemeProvider>
		</div>
	);
};
