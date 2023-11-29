import React, { useContext } from 'react';
import { HoverContext } from '../../context/HoverContext';

export const ShieldItem = ({ theme, text, selected = false }) => {
	const { hovered, setHovered, hoverState } = useContext(HoverContext);

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
				viewBox="0 0 24 24"
				style={{ color: selected ? theme.buttons : theme.icons }}
			>
				<path
					fill="currentColor"
					d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"
				/>
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
