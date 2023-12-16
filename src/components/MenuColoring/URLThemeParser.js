import { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import toastStyles from '../../static/ToastStyles';
import { ThemeContext } from '../../context/ThemeContext';
import { generateShades } from '../../utils/Color';
import { convertPaletteCodeToTheme } from '../../utils/ImportExport';

export const URLThemeParser = () => {
	const { paletteCode } = useParams();
	const { setTheme, updateTheme } = useContext(ThemeContext);
	const navigate = useNavigate();
	const location = useLocation();

	const handleThemeError = (error) => {
		let message = 'An unexpected error has occured.';
		if (error.message === 'InvalidPalette') message = 'An invalid palette code was provided in the URL.';
		toast.error(`${error.name}: ${message}`, toastStyles.error);

		// Reset to default color palette.
		navigate('/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489', { replace: true });
	};

	const handleThemeUpdate = (paletteCode) => {
		try {
			const newTheme = convertPaletteCodeToTheme(paletteCode);
			updateTheme(newTheme);
			generateShades('background', setTheme);
		} catch (error) {
			handleThemeError(error);
		}
	};

	useEffect(() => {
		if (paletteCode) {
			// Parse the code in the URL.
			handleThemeUpdate(paletteCode);
		} else {
			// If there isn't a palette code, reset the URL to default.
			navigate('/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489', { replace: true });
		}
	}, []);

	// Update OGM tags on change.
	useEffect(() => {
		console.log('Location changed.');
	}, [location]);

	return null;
};
