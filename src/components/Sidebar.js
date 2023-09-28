import React, { useState } from 'react';
import { ColorPicker } from '../components/ColorPicker';
import { ImportButton, ExportButton } from './Buttons';

export const Sidebar = () => {
	const [visible, setVisible] = useState(true);

	return (
		<div
			className={`bg-gray-200 pl-3 pr-6 drop-shadow-md z-[1] min-h-screen flex flex-col justify-center transition ${
				visible ? '' : '-translate-x-full absolute'
			}`}>
			{/* Brand */}
			<div className="text-center flex flex-col mt-4">
				<div className="flex justify-center flex-row items-center">
					<img className="invert object-contain p-2 mr-2" src="https://i.imgur.com/7MZJcBe.png" alt="Logo" />
					<h1 className="text-3xl align-bottom font-semibold tracking-wider">VRColors</h1>
				</div>
			</div>

			{/* Color Picker */}
			<div className="flex flex-col gap-y-2 flex-1 items-start justify-center">
				<ColorPicker option={'Highlight'} />
				<ColorPicker option={'Icons'} />
				<ColorPicker option={'Buttons'} />
				<ColorPicker option={'Background'} />
				<ColorPicker option={'Text'} />
				<ColorPicker option={'Subtext'} />
			</div>

			<div className="flex flex-row justify-between px-1">
				<ImportButton />
				<ExportButton />
			</div>

			{/* About | Contact */}
			<div className="flex flex-row gap-x-3 justify-center text-xl mt-6 mb-6">
				<a href="/about" className="hover:underline">
					About
				</a>
				•
				<a href="mailto:eldritchBogo@protonmail.com" className="hover:underline">
					Contact
				</a>
			</div>

			{/* Pull Button */}
			<button
				onClick={() => setVisible(!visible)}
				className="w-32 h-32 bg-gray-200 absolute pr-4 flex justify-end items-center right-0 top-[50%] translate-y-[-50%] translate-x-[45%] rounded-r-full z-[-1]">
				<svg className="w-10 h-10 text-gray-900" viewBox="0 0 15 15">
					<path fill="none" stroke="currentColor" strokeLinecap="square" d="m5 14l7-6.5L5 1" />
				</svg>
			</button>
		</div>
	);
};
