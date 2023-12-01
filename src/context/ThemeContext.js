import React, { createContext, useState } from 'react';

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

	const updateTheme = (newTheme) => {
		setTheme(() => {
			return {
				highlight: newTheme.highlight,
				icons: newTheme.icons,
				buttons: newTheme.buttons,
				background: newTheme.background,
				text: newTheme.text,
				subtext: newTheme.subtext,
			};
		});
	};

	// Provide the state and functions to child components
	const contextValue = {
		theme,
		setTheme,
		updateTheme,
	};

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// Export the context and the custom hook
export { ThemeContext, ThemeProvider };
