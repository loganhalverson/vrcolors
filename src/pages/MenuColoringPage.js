import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '../context/ThemeContext';
import { HoverProvider } from '../context/HoverContext';

import { ExportPanelContainer } from '../components/MenuColoring/ExportPanelContainer';
import { ToastContainer } from 'react-toastify';
import { URLThemeParser } from '../components/MenuColoring/URLThemeParser';
import { DynamicBackground } from '../components/MenuColoring/DynamicBackground';
import { Navbar } from '../components/Navbar';
import { Menu } from '../components/MenuColoring/Menu';

export const MenuColoringPage = () => {
	return (
		<ThemeProvider>
			<HoverProvider>
				<ExportPanelContainer />
				<ToastContainer />
				<URLThemeParser />
				<DynamicBackground />
				<Navbar colorFunctionality />
				<Menu />
			</HoverProvider>
		</ThemeProvider>
	);
};
