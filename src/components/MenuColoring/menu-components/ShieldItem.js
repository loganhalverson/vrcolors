import React, { useContext } from 'react';
import { HoverContext } from '../../../context/HoverContext';

export const ShieldItem = ({ theme, text, icon, viewbox, selected = false }) => {
	const { hovered, hoverState } = useContext(HoverContext);

	// const icon = selected ? CustomShield.path : DefaultShield.path;
	// const viewbox = selected ? CustomShield.viewbox : DefaultShield.viewbox;

	return (
		<li
			id="shieldItem"
			className={`flex w-1/4 flex-col items-center rounded-t-md py-6 text-center transition 
			${selected ? '-translate-y-2 scale-y-110' : ''}
			${selected && hovered.highlight ? hoverState : ''}
			${!selected && hovered.background ? hoverState : ''}
			`}
			style={{ backgroundColor: selected ? theme.highlight : theme.background700, color: theme.text }}
		>
			<svg
				className={`transition 
				${selected ? 'w-20 scale-y-[.90]' : 'w-20'} 
				${selected && hovered.buttons ? hoverState : ''}
				${!selected && hovered.icons ? hoverState : ''} 
				`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox={viewbox}
				style={{ color: selected ? theme.buttons : theme.icons }}
			>
				{icon}
			</svg>
			<p
				className={`mt-2 text-2xl font-semibold tracking-wide ${
					selected ? '-translate-y-2 scale-y-[0.9]' : ''
				} ${hovered.text ? hoverState : ''} `}
			>
				{text}
			</p>
		</li>
	);
};
