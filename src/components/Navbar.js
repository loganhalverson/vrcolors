import React from 'react';
import { ImportButton, ExportButton } from './Buttons';
import { ColorPicker } from './ColorPicker';

export const Navbar = ({ currentPage, colorFunctionality }) => {
	console.log('currentPage is Home?', currentPage === 'Home');
	return (
		<nav className="z-10 bg-white border-gray-200 dark:bg-gray-900">
			<div className="flex flex-wrap items-center justify-between p-3 mx-auto max-w-screen-2xl">
				{/* Brand */}
				<a href="/" className="flex items-center">
					<svg className="w-6 h-6 mr-2 text-white" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"
						/>
					</svg>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VRColors</span>
				</a>

				{/* Links */}
				<div className="block w-auto">
					<ul className="flex flex-row items-center font-medium gap-x-8">
						<li>
							<a href="/" className={`hover:text-blue-400 ${currentPage === 'Home' ? 'text-blue-600' : 'text-white'}`}>
								Home
							</a>
						</li>
						<li>
							<a href="/about" className={`hover:text-blue-400 ${currentPage === 'About' ? 'text-blue-600' : 'text-white'}`}>
								About
							</a>
						</li>
						<li>
							{/* Eventually, display a pop-up that contains various contact information -- discord, email, vrchat, etc. */}
							<a href="mailto:eldritchBogo@protonmail.com" className="text-white hover:text-blue-400">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>

			{colorFunctionality && (
				<div className="mx-auto border-t border-gray-700 max-w-screen-2xl">
					<ul className="flex flex-col items-center justify-between flex-1 px-3 py-2 font-medium gap-y-4 md:gap-y-0 md:flex-row gap-x-8">
						<div className="w-full md:text-xl text-center text-gray-600 md:text-left md:w-1/3">Click the circles to change the menu colors.</div>
						<div className="flex items-end justify-center w-full rounded-xl md:w-1/3 gap-x-6">
							<ColorPicker option={'Highlight'} />
							<ColorPicker option={'Icons'} />
							<ColorPicker option={'Buttons'} />
							<ColorPicker option={'Background'} />
							<ColorPicker option={'Text'} />
							<ColorPicker option={'Subtext'} />
						</div>
						<div className="flex items-center justify-center w-full md:justify-end md:w-1/3 gap-x-4">
							<ImportButton />
							<ExportButton />
						</div>
					</ul>
				</div>
			)}
		</nav>
	);
};
