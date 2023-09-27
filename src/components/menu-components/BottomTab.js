import React from 'react';
import PropTypes from 'prop-types';

export const BottomTab = ({ theme, selected = false }) => {
	return (
		<li
			className={`h-16 w-20 p-2 aspect-square rounded-b-xl flex justify-center ${selected ? 'scale-y-125 translate-y-2' : ''}`}
			style={{ backgroundColor: selected ? theme.highlight : theme.background700 }}>
			<svg
				className={`h-full ${selected ? 'scale-y-[.80] -translate-y-1' : ''}`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				style={{ color: selected ? theme.icons : theme.buttons }}>
				<path
					fill="currentColor"
					d="M14.36 14.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54ZM9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"
				/>
			</svg>
		</li>
	);
};

BottomTab.propTypes = {
	theme: PropTypes.object.isRequired,
};
