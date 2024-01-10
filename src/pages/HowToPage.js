import React from 'react';
import { Navbar } from '../components/Navbar';

export const HowToPage = () => {
	return (
		<>
			{/* Scrolling background */}
			<div className="fixed z-[-1] min-h-screen w-full bg-gradient-to-b from-blue-950 to-gray-950 saturate-[80%] filter" />
			<Navbar />

			<h2 className="mx-6 my-16 block py-4 text-center text-5xl font-bold tracking-wider text-gray-50  md:mx-auto  md:text-7xl ">
				I've got this code; now what?
			</h2>

			<div className="container mx-auto">
				<div className="flex flex-col flex-wrap items-center justify-center xl:flex-row">
					<div className="relative flex w-3/4 flex-col items-center justify-start p-4 text-center xl:w-1/3">
						<img
							src="https://i.imgur.com/fN5BgBA.png"
							className="max-w-full rounded-lg object-contain object-top drop-shadow-md"
							alt=""
						/>

						{/* <p className="mt-4 text-xl tracking-wide text-gray-50 italic">Step One</p> */}
						<p className="mx-2 my-4 h-20 px-2 text-gray-50">
							Inside of VRChat, open up the main menu and navigate to the{' '}
							<span className="font-semibold text-amber-300">VRChat Plus tab</span>, where your other
							custom UI themes and various VRC+ settings are stored.
						</p>
					</div>
					<div className="relative flex w-3/4 flex-col items-center justify-start p-4 text-center xl:w-1/3">
						<img
							src="https://i.imgur.com/xBgawHj.png"
							className="max-w-full rounded-lg object-contain object-top drop-shadow-md"
							alt=""
						/>

						{/* <p className="my-4 text-xl tracking-wide text-gray-50 italic">Step One</p> */}
						<p className="mx-2 my-4 h-20 px-2 text-gray-50">
							Choose the <span className="font-bold">UI Themes</span> section on the left side, click the{' '}
							<span className="font-bold">plus icon</span> to create a new theme, and{' '}
							<span className="font-bold">name it</span> whatever you want.
						</p>
					</div>
					<div className="relative flex w-3/4 flex-col items-center justify-start p-4 text-center xl:w-1/3">
						<img
							src="https://i.imgur.com/p6ERtSN.png"
							className="max-w-full rounded-lg object-contain object-top drop-shadow-md"
							alt=""
						/>

						{/* <p className="my-4 text-xl tracking-wide text-gray-50 italic">Step One</p> */}
						<p className="mx-2 my-4 h-20 px-2 text-gray-50">
							On the screen that pops up, press the <span className="font-bold">Import</span> button.{' '}
							<br />A keyboard will pop up. Paste in the code{' '}
							<span className="italic text-gray-400">
								(It'll look something like '#F4EBD0, #0d3537...')
							</span>{' '}
							that you got from this site, and <span className="text-amber-300">you're done!</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
