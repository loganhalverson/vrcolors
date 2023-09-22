import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import OutsideAlerter from './OutsideAlerter';

export const ColorPicker = ({ displayText }) => {
	const [background, setBackground] = useState('#2aabc1');
	const [pickerVisible, setPickerVisible] = useState(false);

	// Mouse tracking for positioning the picker.
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	const handleChangeComplete = (color) => {
		setBackground(color.hex);
	};

	// Destructures the mouseX and mouseY from the event.
	const handleClick = ({ clientX, clientY }) => {
		setPickerVisible(!pickerVisible);
		setMousePosition({ x: clientX, y: clientY });
	};

	return (
		<div>
			<button onClick={handleClick} className="flex items-center drop-shadow-sm p-3 rounded-md">
				<svg className="inline-block rounded-md" fill={background} aria-hidden="true" width="36" height="36" viewBox="0 0 100 100">
					<rect width="256" height="256" />
				</svg>
				<span className="text-2xl text-black ml-4 mr-4">{displayText}</span>
			</button>

			{/* Display the color picker only when visible by state. */}
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
