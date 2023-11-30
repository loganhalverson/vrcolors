import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/waves.css';

export const LandingPage = () => {
	return (
		<div className="overflow-hidden">
			{/* Desktop Landing Page */}
			<div className="hidden min-h-screen grid-cols-10 flex-col bg-transparent text-white lg:grid ">
				{/* Fixed Background */}
				<div className="fixed -z-10 min-h-screen w-full bg-gradient-to-b from-blue-950 to-gray-950 saturate-[80%] filter" />

				{/* Waves */}
				<div className="absolute bottom-0 left-0 -z-[5] w-full">
					<svg
						className="waves"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 24 150 28"
						preserveAspectRatio="none"
						shapeRendering="auto"
					>
						<defs>
							<path
								id="gentle-wave"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
							/>
						</defs>
						<g className="parallax">
							<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(12,16,33,0.7" />
							<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(12,16,33,0.5)" />
							<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(12,12,33,0.3)" />
							<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(12,21,42,0.3)" />
						</g>
					</svg>
				</div>

				<div className="items-left relative col-span-3 col-start-2 flex flex-col justify-center">
					{/* Branding */}
					<a href="/" className="absolute top-12 hidden items-center xl:flex">
						<svg className="mr-4 h-10 w-10 text-sky-400" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"
							/>
						</svg>
						<span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
							VRColors
						</span>
					</a>
					<h1 className="text-6xl font-semibold leading-tight tracking-tight">
						Build your new favorite menu theme.
					</h1>
					<p className="mt-6 text-2xl">
						Sharing should be easy. Customize your theme, export it into VRChat or share it with others,{' '}
						<span className="text-sky-500">all for free</span>.
					</p>
					<Link
						to={'/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489'}
						className="transition-duration-1000 mt-16 w-full rounded-sm bg-sky-400 p-4 text-center text-xl font-semibold  tracking-wider text-gray-900 shadow-md shadow-blue-500 ring-blue-600 duration-200 hover:text-blue-950 hover:opacity-100 hover:ring-2 focus:ring-2"
					>
						Try it out!
					</Link>
					<div className="transition-duration-1000 group mt-8 w-full cursor-default rounded-sm bg-gray-50 p-4 text-center text-xl font-semibold  tracking-wider text-gray-900 shadow-md shadow-gray-500 ring-gray-600 duration-200 hover:bg-gray-400 hover:opacity-100">
						<span className="group-hover:hidden">Gallery</span>
						<span className="hidden italic group-hover:block">a work in progress...</span>
					</div>
				</div>

				<div className="col-span-4 col-start-6 flex max-h-screen animate-bogo-idle items-center justify-center">
					<video width="600" height="100%" autoPlay loop muted playsInline className="z-10 scale-125">
						<source
							src="https://www.dl.dropboxusercontent.com/scl/fi/vtn4hd338l0an62ogx0sd/croppedOutputTransparent.webm?rlkey=q18s8cvfey193fp94s9eexjpe&dl=0"
							type="video/webm"
						/>
					</video>
				</div>
			</div>

			{/* Mobile Landing Page */}
			<div className="flex lg:hidden">
				{/* Fixed Background */}
				<div className="fixed -z-10 min-h-screen w-full bg-gradient-to-b from-blue-950 to-gray-950 saturate-[80%] filter" />

				<div className="relative flex min-h-screen w-full flex-col items-center justify-start py-8">
					{/* Branding */}
					<a href="/" className="flex flex-[0.1] items-center justify-center">
						<svg className="mr-4 h-20 w-20 text-sky-400" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"
							/>
						</svg>
						<h1 className="self-center whitespace-nowrap text-6xl font-semibold tracking-wider text-white">
							VRColors
						</h1>
					</a>

					{/* Main Content Container */}
					<div className="flex flex-[0.8] flex-col items-center justify-center px-16">
						<div className="col-span-4 col-start-6 flex max-h-screen animate-bogo-idle items-center justify-center">
							<video
								width="600"
								height="100%"
								autoPlay
								loop
								muted
								playsInline
								className="z-10 my-4 scale-90"
							>
								<source
									src="https://www.dl.dropboxusercontent.com/scl/fi/vtn4hd338l0an62ogx0sd/croppedOutputTransparent.webm?rlkey=q18s8cvfey193fp94s9eexjpe&dl=0"
									type="video/webm"
								/>
							</video>
						</div>
						<h3 className="text-center text-4xl font-semibold leading-tight tracking-tight text-white">
							Build your new favorite menu theme.
						</h3>
						<Link
							to={'/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489'}
							className="transition-duration-1000 mt-12 w-full rounded-sm bg-sky-400 p-4 text-center text-xl font-semibold  tracking-wider text-gray-900 shadow-md shadow-blue-500 ring-blue-600 duration-200 hover:text-blue-950 hover:opacity-100 hover:ring-2 focus:ring-2"
						>
							Try it out!
						</Link>
						<div className="transition-duration-1000 group mt-8 w-full cursor-default rounded-sm bg-gray-400 p-4 text-center text-xl font-semibold  italic tracking-wider text-gray-900 opacity-100 shadow-md shadow-gray-500 ring-gray-600 duration-200">
							Gallery (a work in progress...)
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
