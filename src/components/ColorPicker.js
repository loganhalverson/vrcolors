import React, { useContext, useEffect, useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
import OutsideAlerter from './OutsideAlerter';
import { ThemeContext } from '../context/ThemeContext';

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
	const handleClick = ({ pageX, pageY }) => {
		setPickerVisible(!pickerVisible);
		setMousePosition({ x: pageX, y: pageY });
	};

	return (
		<div className="w-full cursor-pointer" onClick={handleClick}>
			<button className="flex items-center drop-shadow-sm p-3 rounded-md">
				<svg className="inline-block rounded-md" fill={background} aria-hidden="true" width="36" height="36" viewBox="0 0 100 100">
					<rect width="256" height="256" />
				</svg>
				<span className="text-2xl text-black ml-4 mr-4">{option}</span>
			</button>

			{/* Display the color picker conditionally. */}
			{pickerVisible ? (
				<div style={{ position: 'absolute', left: mousePosition.x + 10, top: mousePosition.y + 10, zIndex: 10 }}>
					<OutsideAlerter callback={() => setPickerVisible(false)}>
						<SketchPicker color={background} onChangeComplete={handleChangeComplete} />
					</OutsideAlerter>
				</div>
			) : null}
		</div>
	);
};
