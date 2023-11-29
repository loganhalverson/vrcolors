import React, { useContext } from 'react';
import { convertPaletteCodeToTheme } from '../utils/ImportExport';
import { ThemeContext } from '../context/ThemeContext';
import { generateShades } from '../utils/Color';
import { toast } from 'react-toastify';
import emitter from '../context/EventBus';

/*
	Implicit access to ThemeContext is assumed.
	Consider refactoring.
*/

// Create a button that lets a user import a palette code.
export const ImportButton = () => {
	const { setTheme, updateTheme } = useContext(ThemeContext);

	const toastStyleError = {
		position: 'top-center',
		autoClose: 4000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: 'dark',
	};

	const handleClick = () => {
		let paletteCode = window.prompt('Enter a palette code.', '#6be4f9,#2aabc1,#0d3537...');
		if (paletteCode == null) {
			console.log('User cancelled the prompt.');
		} else {
			try {
				const newTheme = convertPaletteCodeToTheme(paletteCode);
				updateTheme(newTheme);
				generateShades('background', setTheme);
			} catch (error) {
				switch (error.message) {
					case 'InvalidPalette':
						toast.error(
							`${error.name}: Invalid palette code provided. A valid code will look like '#F4EBD0,#B68D40...'`,
							toastStyleError
						);
						console.error(error.message);
						break;
					default:
						toast.error(`${error.name}: An unexpected error has occured.`, toastStyleError);
						console.error(error.message);
						break;
				}
			}
		}
	};

	return (
		<button
			onClick={handleClick}
			className="delay-50 rounded-md border border-blue-500 px-6 py-2 text-neutral-100 drop-shadow-sm filter transition duration-300 ease-in-out hover:bg-blue-600 hover:drop-shadow-lg hover:saturate-150"
		>
			Import
		</button>
	);
};

// Create a button that lets a user export the current colors to a palette code.
export const ExportButton = () => {
	return (
		<div>
			<button
				onClick={() => emitter.emit('EXPORT-EVENT', true)}
				className="delay-50 rounded-md border border-emerald-500 px-6 py-2 text-neutral-100 drop-shadow-sm filter transition duration-300 ease-in-out hover:bg-emerald-600 hover:drop-shadow-lg hover:saturate-150 "
			>
				Export
			</button>
		</div>
	);
};
