import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThemeContext } from '../context/ThemeContext';
import { generateShades } from '../utils/Color';
import { convertPaletteCodeToTheme } from '../utils/ImportExport';

export const URLThemeParser = () => {
	const { paletteCode } = useParams();
	const { setTheme, updateTheme } = useContext(ThemeContext);
	const navigate = useNavigate();
	const toastSettings = {
		position: 'top-center',
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: 'dark',
	};

	useEffect(() => {
		if (paletteCode) {
			// If there's a code in the URL, try to parse it.
			try {
				const newTheme = convertPaletteCodeToTheme(paletteCode);
				updateTheme(newTheme);
				generateShades('background', setTheme);
			} catch (error) {
				switch (error.message) {
					case 'InvalidPalette':
						toast.error(`${error.name}: An invalid palette code was provided in the URL.`, toastSettings);
						console.error(error.message);
						break;
					default:
						console.error(error.message);
						toast.error(`${error.name}: An unexpected error has occured.`, toastSettings);
						break;
				}
				// Reset URL to default after catching the error.
				// Is this user-friendly behavior? Would the user benefit from seeing the malformed code in the URL?
				navigate('/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489', { replace: true });
			}
		} else {
			// If there isn't a palette code, reset the URL to default.
			navigate('/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489', { replace: true });
		}
	}, []);

	return <></>;
};
