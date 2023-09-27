import React, { useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
import OutsideAlerter from './OutsideAlerter';
import { generateShades } from '../Color';

export const ColorPicker = ({ option, setTheme }) => {
	const [background, setBackground] = useState('#2aabc1');
	const [pickerVisible, setPickerVisible] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	// Define the key of theme to change when the color picker is used.
	// Set default colors.
	const key = useMemo(() => {
		let innerKey = '';
		switch (option) {
			case 'Highlight':
				innerKey = 'highlight';
				setBackground('#6be4f9');
				break;
			case 'Icons':
				innerKey = 'icons';
				setBackground('#29abc2');
				break;
			case 'Buttons':
				innerKey = 'buttons';
				setBackground('#0d3537');
				break;
			case 'Background':
				innerKey = 'background';
				setBackground('#1b222c');
				break;
			case 'Text':
				innerKey = 'text';
				setBackground('#bbbbbb');
				break;
			case 'Subtext':
				innerKey = 'subtext';
				setBackground('#008489');
				break;
			default:
				innerKey = 'N/A';
				setBackground('#000');
				console.error('Invalid option provided to ColorPicker.');
				break;
		}
		return innerKey;
	}, [option]);

	const handleChangeComplete = (color) => {
		// Update color picker
		setBackground(color.hex);

		setTheme((prevTheme) => {
			return {
				...prevTheme,
				[key]: color.hex,
			};
		});

		generateShades(key, setTheme);
	};

	// Destructures the mouseX and mouseY from the event.
	const handleClick = ({ pageX, pageY }) => {
		setPickerVisible(!pickerVisible);
		setMousePosition({ x: pageX, y: pageY });
	};

	return (
		<div>
			<button onClick={handleClick} className="flex items-center drop-shadow-sm p-3 rounded-md">
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
