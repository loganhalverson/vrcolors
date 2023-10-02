import React, { useState, useEffect, useContext } from 'react';
import { getLightness, shadeHexColor } from '../Color';
import { ThemeContext } from '../context/ThemeContext';

export const DynamicBackground = (props) => {
	const { theme } = useContext(ThemeContext);
	const [style, setStyle] = useState({ background: theme.background });

	useEffect(() => {
		if (getLightness(theme.background) > 50) {
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

	return (
		<div className="flex min-h-screen flex-row items-center font-sans transition" style={style}>
			{props.children}
		</div>
	);
};
