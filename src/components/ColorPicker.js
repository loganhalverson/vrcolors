import React, { useContext, useEffect, useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
import OutsideAlerter from './OutsideAlerter';
import { ThemeContext } from '../context/ThemeContext';
import emitter from '../context/EventBus';

export const ColorPicker = ({ option }) => {
	const [background, setBackground] = useState('#fff');
	const [pickerVisible, setPickerVisible] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	// Destructure theme from context
	const { theme, setTheme } = useContext(ThemeContext);

	// Define the event to transmit when contacting EventBus.
	const eventTag = useMemo(() => {
		let innerTag = '';
		switch (option) {
			case 'Highlight':
				innerTag = 'HIGHLIGHT-HOVER';
				break;
			case 'Icons':
				innerTag = 'ICONS-HOVER';
				break;
			case 'Buttons':
				innerTag = 'BUTTONS-HOVER';
				break;
			case 'Background':
				innerTag = 'BACKGROUND-HOVER';
				break;
			case 'Text':
				innerTag = 'TEXT-HOVER';
				break;
			case 'Subtext':
				innerTag = 'SUBTEXT-HOVER';
				break;
			default:
				console.error('Invalid option provided to ColorPicker.');
				return 'N/A';
		}
		return innerTag;
	}, [option]);

	// Define the key of theme to change when the color picker is used.
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

	// Destructures the mouseX and mouseY from the event.
	const handleClick = ({ clientX, clientY }) => {
		setPickerVisible(!pickerVisible);
		console.log(clientX, clientY);
		setMousePosition({ x: clientX, y: clientY });
	};

	const handleMouseEnter = () => {
		emitter.emit(eventTag, true);
	};

	const handleMouseLeave = () => {
		emitter.emit(eventTag, false);
	};

	// Another possible bad practice.
	// I want the color pickers to update when a palette code is imported.
	// The primitive approach is to have them listen to theme, seeing if their current background
	// is different than their respective key:value value.
	useEffect(() => {
		if (background !== theme[key]) {
			setBackground(theme[key]);
		}
	}, [theme[key]]);

	return (
		<div>
			{/* Label that appears on hover and while color picker is open. */}
			<button
				onClick={handleClick}
				className="w-8 h-8 rounded-full ring group transition hover:scale-105"
				style={{ backgroundColor: background }}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-8 bg-gray-950 rounded-lg py-1 px-2 text-center text-gray-50 transition scale-0 group-hover:-translate-y-16 group-hover:scale-100">
					{option}
				</span>
			</button>

			{/* Display the color picker conditionally. */}
			{pickerVisible ? (
				<div className="relative">
					<div className="absolute -translate-x-[40%]" style={{ top: 16, zIndex: 10 }}>
						{/* <div className="absolute" style={{ left: mousePosition.x, top: mousePosition.y + 16, zIndex: 10 }}> */}
						<OutsideAlerter callback={() => setPickerVisible(false)}>
							<SketchPicker color={background} onChangeComplete={handleChangeComplete} />
						</OutsideAlerter>
					</div>
				</div>
			) : null}
		</div>
	);
};
