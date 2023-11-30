import React, { useContext } from 'react';
import { HoverContext } from '../../context/HoverContext';
import PropTypes from 'prop-types';

export const BottomTab = ({ theme, icon, viewbox, selected = false }) => {
	const { hovered, setHovered, hoverState } = useContext(HoverContext);

	return (
		<li
			className={`flex aspect-square h-16 w-20 justify-center rounded-b-xl p-2 transition
			${selected ? 'translate-y-2 scale-y-125' : ''}
			${selected && hovered.highlight ? hoverState : ''}
			${!selected && hovered.background ? hoverState : ''}
			`}
			style={{ backgroundColor: selected ? theme.highlight : theme.background700 }}
		>
			<svg
				className={`h-full transition 
				${selected ? '-translate-y-1 scale-y-[.80]' : ''}
				${selected && hovered.icons ? hoverState : ''}
				${!selected && hovered.buttons ? hoverState : ''}
				`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox={viewbox}
				style={{ color: selected ? theme.icons : theme.buttons }}
			>
				{icon}
			</svg>
		</li>
	);
};

BottomTab.propTypes = {
	theme: PropTypes.object.isRequired,
};
