import React, { createContext, useEffect, useState } from 'react';
import { generateShades } from '../Color';

// Create a context
const ThemeContext = createContext();

// Create context provider
const ThemeProvider = ({ children }) => {
	// Create theme with default values
	const [theme, setTheme] = useState({
		highlight: '#6be4f9',
		icons: '#2aabc1',
		buttons: '#0d3537',
		background: '#1b222c',
		text: '#bbbbbb',
		subtext: '#008489',
	});

	useEffect(() => {
		// TODO - reconsider how we're implementing this. should we generate all of our shades for each key on mount?
		generateShades('background', setTheme);
	}, [theme.background]);

	// Provide the state and functions to child components
	const contextValue = {
		theme,
		setTheme,
	};

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// Export the context and the custom hook
export { ThemeContext, ThemeProvider };
