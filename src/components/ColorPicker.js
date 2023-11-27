import React, { useContext, useEffect, useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
import OutsideAlerter from './OutsideAlerter';
import { ThemeContext } from '../context/ThemeContext';
import emitter from '../context/EventBus';
import { useParams, useNavigate } from 'react-router-dom';

export const ColorPicker = ({ option }) => {
	const [background, setBackground] = useState('#fff');
	const [pickerVisible, setPickerVisible] = useState(false);
	const { theme, setTheme } = useContext(ThemeContext);
	const { paletteCode } = useParams();
	const navigate = useNavigate();

	/*
		eventTag: The event emitted onMouseEnter for the hover effect.
		key: The respective value of each color picker to theme, i.e highlight, buttons, icons.
		urlIndex: The index of the value to update in the URL on color change.
	*/
	const { eventTag, key, urlIndex } = useMemo(() => {
		let innerParams = { eventTag: null, key: null, urlIndex: null };
		switch (option) {
			case 'Highlight':
				innerParams.key = 'highlight';
				innerParams.eventTag = 'HIGHLIGHT-HOVER';
				innerParams.urlIndex = 0;
				break;
			case 'Icons':
				innerParams.key = 'icons';
				innerParams.eventTag = 'ICONS-HOVER';
				innerParams.urlIndex = 1;
				break;
			case 'Buttons':
				innerParams.key = 'buttons';
				innerParams.eventTag = 'BUTTONS-HOVER';
				innerParams.urlIndex = 2;
				break;
			case 'Background':
				innerParams.key = 'background';
				innerParams.eventTag = 'BACKGROUND-HOVER';
				innerParams.urlIndex = 3;
				break;
			case 'Text':
				innerParams.key = 'text';
				innerParams.eventTag = 'TEXT-HOVER';
				innerParams.urlIndex = 4;
				break;
			case 'Subtext':
				innerParams.key = 'subtext';
				innerParams.eventTag = 'SUBTEXT-HOVER';
				innerParams.urlIndex = 5;
				break;
			default:
				console.error('Invalid option provided to ColorPicker.');
				break;
		}

		return innerParams;
	}, [option]);

	// Refresh background when a palette code is imported.
	useEffect(() => {
		if (background !== theme[key]) {
			setBackground(theme[key]);
		}
	}, [theme[key]]);

	// Initialize background after useMemo() runs.
	useEffect(() => {
		setBackground(theme[key]);
	}, [key]);

	// Changes the hex value in the URL. Assumes a valid URL palette code.
	const updateHexInURL = (hex) => {
		try {
			const color = hex.slice(1).toUpperCase();
			const newUrl = paletteCode
				.split('-')
				.map((val, index) => (index === urlIndex ? color : val))
				.join('-');
			navigate(`../color/${newUrl}`, { replace: true });
		} catch (error) {
			if (error instanceof TypeError) {
				console.error(`${error.name}: ColorPicker did not find a valid palette code in the URL.`);
			} else {
				console.error(`${error.name}: ${error.message}`);
			}
		}
	};

	// Update background function.
	const handleChangeComplete = (color) => {
		setBackground(color.hex);
		setTheme((prevTheme) => {
			return {
				...prevTheme,
				[key]: color.hex,
			};
		});
		updateHexInURL(color.hex);
	};

	/*
		--- Event Listeners ---
		onClick(): Display / hide the color picker.
		onMouseEnter(): Toggle on the hover state for all associated items.
		onMouseLeave(): Toggle off the hover state for all associated items.
	*/
	return (
		<div>
			<button
				onClick={() => setPickerVisible(!pickerVisible)}
				className="w-8 h-8 rounded-full ring group transition hover:scale-105"
				style={{ backgroundColor: background }}
				onMouseEnter={() => emitter.emit(eventTag, true)}
				onMouseLeave={() => emitter.emit(eventTag, false)}>
				{/* Label that appears on hover. */}
				<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8 bg-gray-950 rounded-lg py-1 px-2 text-center text-gray-50 transition scale-0 group-hover:-translate-y-16 group-hover:scale-100">
					{option}
				</span>
			</button>

			{pickerVisible ? (
				<div className="relative">
					<div className="absolute -translate-x-[40%]" style={{ top: 16, zIndex: 10 }}>
						<OutsideAlerter callback={() => setPickerVisible(false)}>
							<SketchPicker color={background} onChangeComplete={handleChangeComplete} />
						</OutsideAlerter>
					</div>
				</div>
			) : null}
		</div>
	);
};
