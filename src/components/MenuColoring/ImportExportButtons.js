import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { convertPaletteCodeToTheme, convertPaletteCodeToURL } from '../../utils/ImportExport';
import { ThemeContext } from '../../context/ThemeContext';
import { generateShades } from '../../utils/Color';
import { toast } from 'react-toastify';
import toastStyles from '../../static/ToastStyles';
import emitter from '../../context/EventBus';

/*
	Implicit access to ThemeContext is assumed.
*/
export const ImportButton = () => {
	const { setTheme, updateTheme } = useContext(ThemeContext);
	const navigate = useNavigate();

	const handleClick = () => {
		let paletteCode = window.prompt('Enter a palette code.', '#6be4f9,#2aabc1,#0d3537...');
		if (paletteCode == null) {
			console.log('User cancelled the prompt.');
		} else {
			try {
				const newTheme = convertPaletteCodeToTheme(paletteCode);
				updateTheme(newTheme);
				generateShades('background', setTheme);

				// Update URL.
				navigate(`../color/${convertPaletteCodeToURL(paletteCode)}`, { replace: true });
			} catch (error) {
				switch (error.message) {
					case 'InvalidPalette':
						toast.error(
							`${error.name}: Invalid palette code provided. A valid code will look like '#F4EBD0,#B68D40...'`,
							toastStyles.error
						);
						console.error(error.message);
						break;
					default:
						toast.error(`${error.name}: An unexpected error has occured.`, toastStyles.error);
						console.error(error.message);
						break;
				}
			}
		}
	};

	return (
		<button
			onClick={handleClick}
			className="delay-50 rounded-md bg-blue-600 px-6 py-2 text-neutral-100 shadow-sm shadow-blue-900 ring-blue-800 filter transition duration-200 hover:ring  hover:saturate-150 focus:ring-2"
		>
			Import
		</button>
	);
};

export const ExportButton = () => {
	return (
		<div>
			<button
				onClick={() => emitter.emit('EXPORT-EVENT', true)}
				className="delay-50 rounded-md bg-emerald-600 px-6 py-2 text-neutral-100 shadow-sm shadow-green-900 ring-emerald-800 filter transition duration-200 hover:ring hover:saturate-150 focus:ring-2"
			>
				Export
			</button>
		</div>
	);
};
