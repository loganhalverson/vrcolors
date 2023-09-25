import React from 'react';

export const ShieldItem = ({ theme, text, selected = false }) => {
	return (
		<li
			id="shieldItem"
			className="w-1/4 py-4 rounded-t-md text-center flex flex-col items-center"
			style={{ backgroundColor: selected ? theme.highlight : theme.background500, color: selected ? theme.buttons : theme.text }}>
			<svg className="w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"
				/>
			</svg>
			<p className="text-2xl font-semibold tracking-wide mt-2">{text}</p>
		</li>
	);
};
