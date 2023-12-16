import React, { useState, useMemo } from 'react';
import { ImportButton, ExportButton } from './MenuColoring/ImportExportButtons';
import { ColorPicker } from './MenuColoring/ColorPicker';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = ({ colorFunctionality }) => {
	// If the overlay directing users attention to the color pickers on first visit is visible.
	const [onboarding, setOnboarding] = useState(false);

	// The theme's keys used in creating the ColorPicker objects.
	const keys = ['Highlight', 'Icons', 'Buttons', 'Background', 'Text', 'Subtext'];

	// Current page. ex: about, color, how-to
	let currentPage = useLocation().pathname.split('/')[1];

	const clearOnboarding = async () => {
		localStorage.setItem('isFirstVisit', false);
		setOnboarding(false);
	};

	// Check if it is user's first visit.
	useMemo(async () => {
		if (localStorage.getItem('isFirstVisit') === null) {
			setOnboarding(true);
		}
	}, []);

	return (
		<nav className="z-10 border-gray-200 bg-white dark:bg-gray-900">
			<div className={`mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-3`}>
				{/* Brand */}
				<Link to="../" className="flex items-center">
					<svg className="mr-3 h-6 w-6 text-sky-400" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"
						/>
					</svg>
					<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						VRColors
					</span>
				</Link>

				{/* Links */}
				<div className="block w-auto">
					<ul className="flex flex-row items-center gap-x-8 font-medium">
						<Link
							to="/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489"
							key="home"
							className={`hover:text-blue-400 ${
								currentPage === 'color' ? 'text-blue-600' : 'text-white'
							}`}
						>
							Color
						</Link>
						<Link
							to="/about"
							key="about"
							className={`hover:text-blue-400 ${
								currentPage === 'about' ? 'text-blue-600' : 'text-white'
							}`}
						>
							About
						</Link>
						<Link
							to="/how-to"
							key="how-to"
							className={`hover:text-blue-400 ${
								currentPage === 'how-to' ? 'text-blue-600' : 'text-white'
							}`}
						>
							How To Use
						</Link>
					</ul>
				</div>
			</div>

			{colorFunctionality && (
				<div className="mx-auto max-w-screen-2xl border-t border-gray-700">
					<ul className="flex flex-1 flex-col items-center justify-between gap-x-8 gap-y-4 px-3 py-2 font-medium md:flex-row md:gap-y-0">
						<div className="w-full text-center text-gray-600 md:w-1/3 md:text-left md:text-xl">
							Click the circles to change the menu colors.
						</div>
						<div className="relative z-[1] px-4">
							<div className="relative z-[2] flex w-full items-end justify-center gap-x-6 rounded-xl bg-gray-900 p-2 px-4">
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
									<div
										onClick={() => clearOnboarding()}
										className="fixed z-[3] min-h-screen min-w-full"
									/>
									<div className="absolute -inset-2 z-[1] animate-pulse rounded-lg bg-gradient-to-br from-pink-600 to-blue-600 blur-lg" />
									<div className="fixed left-0 top-0 min-h-screen min-w-full bg-neutral-950 text-white opacity-95">
										<button
											onClick={() => clearOnboarding()}
											className="m-4 my-2 flex h-8 w-8 items-center justify-center rounded-full p-4 text-3xl text-white"
										>
											x
										</button>
									</div>
									<span className="absolute left-1/2 mt-4 w-3/4 -translate-x-1/2 text-center text-xl font-semibold text-white">
										Click on the circles to{' '}
										<span className="bg-gradient-to-br from-pink-600 to-blue-700 bg-clip-text text-transparent brightness-200 filter">
											change the colors
										</span>{' '}
										of the menu below.
									</span>
								</>
							)}
						</div>
						<div className="flex w-full items-center justify-center gap-x-4 md:w-1/3 md:justify-end">
							<ImportButton />
							<ExportButton />
						</div>
					</ul>
				</div>
			)}
		</nav>
	);
};
