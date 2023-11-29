import React, { useState, useEffect, useContext } from 'react';
import { shadeHexColor } from '../utils/Color';
import { ThemeContext } from '../context/ThemeContext';

export const DynamicBackground = () => {
	const { theme } = useContext(ThemeContext);
	const [style, setStyle] = useState({ background: theme.background });

	useEffect(() => {
		setStyle({
			...style,
			background: `linear-gradient(to right top, ${shadeHexColor(theme.background, -0.8)}, 60%, ${shadeHexColor(
				theme.background,
				-0.4
			)}, 85%, ${shadeHexColor(theme.background, -0.8)})`,
		});
	}, [theme.background]);

	return <div className="fixed z-[-1] min-h-screen w-full saturate-[80%] filter" style={style} />;
};
