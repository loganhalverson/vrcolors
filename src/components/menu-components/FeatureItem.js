import React, { useState } from 'react';
import Switch from 'react-switch';
import { shadeHexColor } from '../../Color';

export const FeatureItem = ({ theme, text, selected = false }) => {
	const [checked, setChecked] = useState(selected);
	const [enabled, setEnabled] = useState(selected);

	const handleChange = () => {
		setChecked(!checked);
		setEnabled(!enabled);
	};

	let selectedItemStyle = {};
	let defaultItemStyle = {};
	try {
		defaultItemStyle = { backgroundColor: theme.background600, border: `medium solid ${shadeHexColor(theme.background700, 0.1)}` };
		selectedItemStyle = { backgroundColor: theme.buttons, border: `medium solid ${shadeHexColor(theme.buttons, 0.2)}` };
	} catch (e) {
		// Shades not generated yet. They will be on the next render.
		// 09272023 - If there is a better way to do this in the React framework, please do it.
	}

	return (
		<li>
			<div className="flex items-center justify-center w-32 h-12 mt-2">
				<Switch
					onChange={handleChange}
					checked={checked}
					checkedIcon={false}
					uncheckedIcon={false}
					borderRadius={0}
					onHandleColor={shadeHexColor(theme.buttons, 0.1)}
					offHandleColor={shadeHexColor(theme.buttons, 0.1)}
					onColor={theme.background900}
					offColor={theme.background900}
				/>
			</div>
			<div
				onClick={handleChange}
				className="flex flex-col items-center w-32 p-2 py-1 mt-2 mb-16 text-center transition-colors cursor-pointer aspect-square rounded-xl"
				style={enabled ? selectedItemStyle : defaultItemStyle}>
				<svg
					className="w-3/4 transition-colors"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					style={{ color: enabled ? theme.icons : theme.buttons }}>
					<path
						fill="currentColor"
						d="M14.36 14.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54ZM9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"
					/>
				</svg>

				{/* Adjust top margin if text is double line or not. */}
				<p className="mt-1 font-semibold leading-tight select-none h-1/4" style={{ color: theme.text, marginTop: text.length > 8 ? '-0.25rem' : '0.25rem' }}>
					{text}
				</p>
			</div>
		</li>
	);
};
