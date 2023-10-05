import React, { useState, useEffect, useContext } from 'react';
import { shadeHexColor, isLightColor } from '../Color';
import { ThemeContext } from '../context/ThemeContext';

export const DynamicBackground = (props) => {
	const { theme } = useContext(ThemeContext);
	const [style, setStyle] = useState({ background: theme.background });

	useEffect(() => {
		if (isLightColor(theme.background)) {
			// Light background pattern
			setStyle({
				...style,
				background: `linear-gradient(to right top, ${shadeHexColor(theme.background, -0.4)}, 60%, ${shadeHexColor(
					theme.background,
					-0.05
				)}, 85%, ${shadeHexColor(theme.background, -0.4)})`,
			});
		} else {
			// Dark background pattern
			setStyle({
				...style,
				background: `linear-gradient(to right top, ${shadeHexColor(theme.background, -0.8)}, 60%, ${shadeHexColor(
					theme.background,
					-0.4
				)}, 85%, ${shadeHexColor(theme.background, -0.8)})`,
			});
		}
	}, [theme.background]);

	// <div className="fixed z-[-1] w-full bg-gradient-to-b from-blue-950 to-gray-950 filter saturate-[80%] min-h-screen" />

	return <div className="fixed z-[-1] w-full filter saturate-[80%] min-h-screen" style={style} />;
};
