import React, { useContext, useEffect, useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
import OutsideAlerter from './OutsideAlerter';
import { ThemeContext } from '../context/ThemeContext';
import { isLightColor } from '../Color';

export const ColorPicker = ({ option }) => {
	const [background, setBackground] = useState('#fff');
	const [pickerVisible, setPickerVisible] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	// Destructure theme from context
	const { theme, setTheme } = useContext(ThemeContext);

	// Define the key of theme to change when the color picker is used.
	// Set default colors.
	const key = useMemo(() => {
		let innerKey = '';
		switch (option) {
			case 'Highlight':
				innerKey = 'highlight';
				break;
			case 'Icons':
				innerKey = 'icons';
				break;
			case 'Buttons':
				innerKey = 'buttons';
				break;
			case 'Background':
				innerKey = 'background';
				break;
			case 'Text':
				innerKey = 'text';
				break;
			case 'Subtext':
				innerKey = 'subtext';
				break;
			default:
				innerKey = 'N/A';
				console.error('Invalid option provided to ColorPicker.');
				return '';
		}

		setBackground(theme[innerKey]);
		return innerKey;
	}, [option]);

	const handleChangeComplete = (color) => {
		setBackground(color.hex);

		setTheme((prevTheme) => {
			return {
				...prevTheme,
				[key]: color.hex,
			};
		});
	};

	// Another possible bad practice.
	// I want the color pickers to update when a palette code is imported.
	// The primitive approach is to have them listen to theme, seeing if their current background
	// is different than their respective key:value value.
	useEffect(() => {
		if (background !== theme[key]) {
			console.log(`${key} mismatch!`);
			setBackground(theme[key]);
		}
	}, [theme]);

	// Destructures the mouseX and mouseY from the event.
	const handleClick = ({ clientX, clientY }) => {
		setPickerVisible(!pickerVisible);
		console.log(clientX, clientY);
		setMousePosition({ x: clientX, y: clientY });
	};

	return (
		<>
			<button onClick={handleClick} className="relative w-8 h-8 rounded-full ring" style={{ backgroundColor: background }} />

			{/* Display the color picker conditionally. */}
			{pickerVisible ? (
				<div className="absolute -translate-x-[50%]" style={{ left: mousePosition.x, top: mousePosition.y + 16, zIndex: 10 }}>
					<OutsideAlerter callback={() => setPickerVisible(false)}>
						<SketchPicker color={background} onChangeComplete={handleChangeComplete} />
					</OutsideAlerter>
				</div>
			) : null}
		</>
	);
};
