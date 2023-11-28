import React, { useState, useMemo, useEffect } from 'react';
import { ImportButton, ExportButton } from './Buttons';
import { ColorPicker } from './ColorPicker';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = ({ colorFunctionality, offset = 0 }) => {
	// If the overlay directing users attention to the color pickers on first visit is visible.
	const [onboarding, setOnboarding] = useState(false);

	// The theme's keys used in creating the ColorPicker objects.
	const keys = ['Highlight', 'Icons', 'Buttons', 'Background', 'Text', 'Subtext'];

	// Current page. ex: about, color, how-to
	let currentPage = useLocation().pathname.split('/')[1];

	const clearOnboarding = () => {
		localStorage.setItem('isFirstVisit', false);
		setOnboarding(false);
	};

	// Check if it is user's first visit.
	useMemo(() => {
		if (localStorage.getItem('isFirstVisit') === null) {
			setOnboarding(true);
		}
	}, [onboarding]);

	return (
		<nav className="z-10 bg-white border-gray-200 dark:bg-gray-900">
			<div className={`flex flex-wrap items-center justify-between p-3 mx-auto max-w-screen-2xl`}>
				{/* Brand */}
				<Link to="../color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489" className="flex items-center">
					<svg className="w-6 h-6 mr-2 text-white" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"
						/>
					</svg>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VRColors</span>
				</Link>

				{/* Links */}
				<div className="block w-auto">
					<ul className="flex flex-row items-center font-medium gap-x-8">
						<Link
							to="/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489"
							key="home"
							className={`hover:text-blue-400 ${currentPage === 'color' ? 'text-blue-600' : 'text-white'}`}>
							Color
						</Link>
						<Link to="/about" key="about" className={`hover:text-blue-400 ${currentPage === 'about' ? 'text-blue-600' : 'text-white'}`}>
							About
						</Link>
						<Link to="/how-to" key="how-to" className={`hover:text-blue-400 ${currentPage === 'how-to' ? 'text-blue-600' : 'text-white'}`}>
							How To Use
						</Link>
					</ul>
				</div>
			</div>

			{colorFunctionality && (
				<div className="mx-auto border-t border-gray-700 max-w-screen-2xl">
					<ul className="flex flex-col items-center justify-between flex-1 px-3 py-2 font-medium gap-y-4 md:gap-y-0 md:flex-row gap-x-8">
						<div className="w-full md:text-xl text-center text-gray-600 md:text-left md:w-1/3">Click the circles to change the menu colors.</div>
						<div className="px-4 relative z-[1]">
							<div className="relative flex items-end justify-center w-full rounded-xl gap-x-6 p-2 px-4 bg-gray-900 z-[2]">
								{keys.map((key, idx) => {
									return (
										<div onClick={() => clearOnboarding()} key={idx}>
											<ColorPicker option={key} />
										</div>
									);
								})}
							</div>

							{/* If it's the user's first visit, display the onboarding help. */}
							{onboarding && (
								<>
									{/* Hide onBoarding if the user clicks anywhere. */}
									<div onClick={() => clearOnboarding()} className="fixed min-h-screen min-w-full z-[3]" />
									<div className="absolute -inset-2 animate-pulse bg-gradient-to-br from-pink-600 to-blue-600 rounded-lg blur-lg z-[1]" />
									<div className="fixed text-white top-0 left-0 min-h-screen bg-neutral-950 opacity-95 min-w-full">
										<button
											onClick={() => clearOnboarding()}
											className="p-4 rounded-full m-4 my-2 w-8 h-8 flex justify-center items-center text-white text-3xl">
											x
										</button>
									</div>
									<span className="absolute left-1/2 -translate-x-1/2 mt-4 text-white font-semibold text-center w-3/4 text-xl">
										Click on the circles to{' '}
										<span className="bg-gradient-to-br bg-clip-text text-transparent from-pink-600 to-blue-700 filter brightness-200">change the colors</span>{' '}
										of the menu below.
									</span>
								</>
							)}
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
