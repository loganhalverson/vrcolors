import React, { useContext } from 'react';
import { convertPaletteCodeToTheme, convertThemeToPaletteCode } from '../utils/ImportExport';
import { ThemeContext } from '../context/ThemeContext';
import { generateShades } from '../utils/Color';

/*
	It is assumed that each of these buttons has access to ThemeContext.
	This may be bad practice, for it leads to the components being highly coupled.
	A developer smarter with React than I would know, but alas, I am not such a developer.
*/

// Create a button that lets a user import a palette code.
export const ImportButton = () => {
	const { setTheme } = useContext(ThemeContext);

	const handleClick = () => {
		let paletteCode = window.prompt('Enter a palette code.', '#6be4f9,#2aabc1,#0d3537...');
		if (paletteCode == null) {
			console.log('User cancelled the prompt.');
		} else {
			const newTheme = convertPaletteCodeToTheme(paletteCode);
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
			generateShades('background', setTheme);
		}
	};

	return (
		<button
			onClick={handleClick}
			className="px-6 py-2 transition duration-300 ease-in-out bg-blue-500 rounded-md text-neutral-100 delay-50 filter hover:saturate-150 drop-shadow-sm hover:drop-shadow-lg">
			Import
		</button>
	);
};

// Create a button that lets a user export the current colors to a palette code.
export const ExportButton = () => {
	const { theme } = useContext(ThemeContext);

	const handleClick = () => {
		const paletteCode = convertThemeToPaletteCode(theme);
		// alert(`Your palette code is: \n${paletteCode}`);
		try {
			navigator.clipboard.writeText(paletteCode);
			// Notification pop-up...
			alert('Successfully copied to clipboard.');
		} catch (e) {
			alert('Something went wrong! Check the console for details.');
			console.error(e.message);
		}
	};

	return (
		<button
			onClick={handleClick}
			className="px-6 py-2 transition duration-300 ease-in-out bg-green-500 rounded-md text-neutral-100 delay-50 filter hover:saturate-150 drop-shadow-sm hover:drop-shadow-lg ">
			Export
		</button>
	);
};
