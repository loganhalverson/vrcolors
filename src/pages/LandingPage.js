import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
	return (
		<div className="min-h-screen bg-transparent text-white flex flex-col xl:grid grid-cols-10 ">
			{/* Fixed Background */}
			<div className="fixed z-[-1] w-full bg-gradient-to-b from-blue-950 to-gray-950 filter saturate-[80%] min-h-screen" />

			<div className="col-start-2 col-span-3 relative flex justify-center items-left flex-col">
				{/* Branding */}
				<a href="/" className="hidden xl:flex items-center absolute top-12">
					<svg className="w-10 h-10 mr-4 text-white" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"
						/>
					</svg>
					<span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">VRColors</span>
				</a>

				<h1 className="text-6xl tracking-tight font-semibold leading-tight">Find your new favorite menu theme.</h1>
				<p className="text-2xl mt-6">
					Sharing should be easy. Customize your theme, export into VRChat or share it with others, <span className="text-teal-300">all for free</span>.
				</p>
				<Link
					to={'/color/6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489'}
					className="w-full text-center p-4 bg-sky-400 tracking-wider font-semibold text-gray-900 rounded-sm text-xl  hover:opacity-100 transition-duration-1000 duration-200 mt-16 ring-blue-600 shadow-md shadow-blue-500 hover:ring-2 focus:ring-2">
					Try it out!
				</Link>
				<div className="w-full group cursor-default text-center p-4 bg-gray-50 tracking-wider font-semibold text-gray-900 rounded-sm text-xl  hover:opacity-100 transition-duration-1000 duration-200 mt-8 ring-gray-600 shadow-md shadow-gray-500 hover:bg-gray-400">
					<span className="group-hover:hidden">Gallery</span>
					<span className="hidden group-hover:block italic">a work in progress...</span>
				</div>
			</div>

			<div className="col-start-6 col-span-4 flex justify-center items-center">
				<img src="https://i.imgur.com/j6edbOg.jpeg" className="rounded-lg object-contain object-top max-w-2xl drop-shadow-md flex-[0.2]" alt="" />
			</div>
		</div>
	);
};
