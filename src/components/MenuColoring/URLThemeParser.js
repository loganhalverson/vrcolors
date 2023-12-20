import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import toastStyles from '../../static/ToastStyles';
import { ThemeContext } from '../../context/ThemeContext';
import { generateShades } from '../../utils/Color';
import { convertPaletteCodeToTheme } from '../../utils/ImportExport';
import { Helmet } from 'react-helmet-async';

export const URLThemeParser = () => {
	const { paletteCode } = useParams();
	const { setTheme, updateTheme } = useContext(ThemeContext);

	const [helmetData, setHelmetData] = useState({
		image: 'https://i.imgur.com/2e1s6pf.png',
		description: 'A VRChat theme creation and sharing website.',
	});

	const navigate = useNavigate();
	const location = useLocation();

	const handleURLError = (error) => {
		let message = 'An unexpected error has occured.';
		if (error.message === 'InvalidPalette') message = 'An invalid palette code was provided in the URL.';
		toast.error(`${error.name}: ${message}`, toastStyles.error);

		// Reset to default color palette.
		navigate('/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489', { replace: true });
	};

	const handleURLUpdate = (paletteCode) => {
		try {
			const newTheme = convertPaletteCodeToTheme(paletteCode);
			updateTheme(newTheme);
			generateShades('background', setTheme);
		} catch (error) {
			handleURLError(error);
		}
	};

	// Resets the helmet data to default.
	const handleCleanup = () => {
		setHelmetData({
			...helmetData,
			image: 'https://i.imgur.com/2e1s6pf.png',
		});
	};

	const getThumbnailURL = () => {
		const baseUrl = process.env.REACT_APP_THUMBNAIL_API_URL;
		return `${baseUrl}?hex=${paletteCode}`;
	};

	useEffect(() => {
		if (paletteCode) {
			// Parse the code in the URL.
			handleURLUpdate(paletteCode);
		} else {
			// If there isn't a palette code, reset the URL to default.
			navigate('/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489', { replace: true });
		}
	}, []);

	// Update OGM tags on change.
	useEffect(() => {
		setHelmetData({
			image: getThumbnailURL(),
			description: paletteCode,
		});

		return handleCleanup;
	}, [location]);

	return (
		<Helmet>
			<meta name="og:image" content={helmetData.image} />
			<meta name="og:description" content={helmetData.description} />
		</Helmet>
	);
};
