import React, { useState, useContext } from 'react';
import { HoverContext } from '../../context/HoverContext';
import Switch from 'react-switch';
import { shadeHexColor } from '../../utils/Color';

export const FeatureItem = ({ theme, text, icon, viewbox, selected = false }) => {
	const { hovered, setHovered, hoverState } = useContext(HoverContext);
	const [checked, setChecked] = useState(selected);
	const [enabled, setEnabled] = useState(selected);
	let selectedItemStyle = {};
	let defaultItemStyle = {};

	const handleClick = () => {
		setChecked(!checked);
		setEnabled(!enabled);
	};

	try {
		defaultItemStyle = {
			backgroundColor: theme.background600,
			border: `medium solid ${shadeHexColor(theme.background700, 0.1)}`,
		};
		selectedItemStyle = {
			backgroundColor: theme.buttons,
			border: `medium solid ${shadeHexColor(theme.buttons, 0.2)}`,
		};
	} catch (e) {
		// Shades not generated yet. They will be on the next render.
		// 09272023 - If there is a better way to do this in the React framework, please do it.
	}

	return (
		<li>
			<div
				className={`mt-2 flex h-12 w-32 items-center justify-center filter transition ${
					hovered.background ? 'brightness-150' : 'brightness-100'
				}`}
			>
				<Switch
					onChange={handleClick}
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
				onClick={handleClick}
				className={`mb-16 mt-2 flex aspect-square w-32 cursor-pointer flex-col items-center rounded-xl p-2 py-1 text-center filter transition 
				${hovered.background && !enabled ? hoverState : ''} 
				${hovered.buttons && enabled ? hoverState : ''}`}
				style={enabled ? selectedItemStyle : defaultItemStyle}
			>
				<svg
					className={`w-3/4 p-1 transition 
					${enabled && hovered.icons ? hoverState : ''} 
					${!enabled && hovered.buttons ? hoverState : ''}
					`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox={viewbox}
					style={{ color: enabled ? theme.icons : theme.buttons }}
				>
					{icon}
				</svg>

				{/* Adjust top margin if text is double line or not. */}
				<p
					className={`mt-1 h-1/4 select-none font-semibold leading-tight filter transition ${
						hovered.text ? hoverState : ''
					}`}
					style={{ color: theme.text, marginTop: text.length > 8 ? '-0.25rem' : '0.25rem' }}
				>
					{text}
				</p>
			</div>
		</li>
	);
};
