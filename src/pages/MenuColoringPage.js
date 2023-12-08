import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '../context/ThemeContext';
import { HoverProvider } from '../context/HoverContext';

import { ExportPanelContainer } from '../components/ExportPanelContainer';
import { ToastContainer } from 'react-toastify';
import { ThumbnailBuilder } from '../components/thumbnail/ThumbnailBuilder';
import { URLThemeParser } from '../utils/URLThemeParser';
import { DynamicBackground } from '../components/DynamicBackground';
import { Navbar } from '../components/Navbar';
import { Menu } from '../components/Menu';

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
				<ThumbnailBuilder />
			</HoverProvider>
		</ThemeProvider>
	);
};
