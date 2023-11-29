import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
	return (
		<div className="flex min-h-screen grid-cols-10 flex-col bg-transparent text-white xl:grid ">
			{/* Fixed Background */}
			<div className="fixed z-[-1] min-h-screen w-full bg-gradient-to-b from-blue-950 to-gray-950 saturate-[80%] filter" />

			<div className="items-left relative col-span-3 col-start-2 flex flex-col justify-center">
				{/* Branding */}
				<a href="/" className="absolute top-12 hidden items-center xl:flex">
					<svg className="mr-4 h-10 w-10 text-white" viewBox="0 0 24 24">
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
					Find your new favorite menu theme.
				</h1>
				<p className="mt-6 text-2xl">
					Sharing should be easy. Customize your theme, export into VRChat or share it with others,{' '}
					<span className="text-teal-300">all for free</span>.
				</p>
				<Link
					to={'/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489'}
					className="transition-duration-1000 mt-16 w-full rounded-sm bg-sky-400 p-4 text-center text-xl font-semibold  tracking-wider text-gray-900 shadow-md shadow-blue-500 ring-blue-600 duration-200 hover:opacity-100 hover:ring-2 focus:ring-2"
				>
					Try it out!
				</Link>
				<div className="transition-duration-1000 group mt-8 w-full cursor-default rounded-sm bg-gray-50 p-4 text-center text-xl font-semibold  tracking-wider text-gray-900 shadow-md shadow-gray-500 ring-gray-600 duration-200 hover:bg-gray-400 hover:opacity-100">
					<span className="group-hover:hidden">Gallery</span>
					<span className="hidden italic group-hover:block">a work in progress...</span>
				</div>
			</div>

			<div className="col-span-4 col-start-6 flex items-center justify-center">
				<img
					src="https://i.imgur.com/j6edbOg.jpeg"
					className="max-w-2xl flex-[0.2] rounded-lg object-contain object-top drop-shadow-md"
					alt=""
				/>
			</div>
		</div>
	);
};
