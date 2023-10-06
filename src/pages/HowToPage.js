import React from 'react';
import { Navbar } from '../components/Navbar';

export const HowToPage = () => {
	return (
		<>
			{/* Scrolling background */}
			<div className="fixed z-[-1] w-full bg-gradient-to-b from-blue-950 to-gray-950 filter saturate-[80%] min-h-screen" />
			<Navbar currentPage={'How To Use'} />

			<h2 className="block text-center my-16 font-bold tracking-wider text-gray-50  text-7xl  py-4 ">I've got this code; now what?</h2>

			<div className="mx-auto container">
				<div className="flex flex-col xl:flex-row items-center flex-wrap justify-center">
					<div className="xl:w-1/3 w-3/4 p-4 flex flex-col text-center items-center justify-start relative">
						<img src="https://i.imgur.com/fN5BgBA.png" className="rounded-lg object-contain object-top max-w-full drop-shadow-md" alt="" />

						{/* <p className="mt-4 text-xl tracking-wide text-gray-50 italic">Step One</p> */}
						<p className="my-4 text-gray-50 px-2 mx-2 h-20">
							Inside of VRChat, open up the main menu and navigate to the <span className="text-amber-300 font-semibold">VRChat Plus tab</span>, where your
							other custom UI themes and various VRC+ settings are stored.
						</p>
					</div>
					<div className="xl:w-1/3 w-3/4 p-4 flex flex-col text-center items-center justify-start relative">
						<img src="https://i.imgur.com/xBgawHj.png" className="rounded-lg object-contain object-top max-w-full drop-shadow-md" alt="" />

						{/* <p className="my-4 text-xl tracking-wide text-gray-50 italic">Step One</p> */}
						<p className="my-4 text-gray-50 px-2 mx-2 h-20">
							Choose the <span className="font-bold">UI Themes</span> section on the left side, click the <span className="font-bold">plus icon</span> to create
							a new theme, and <span className="font-bold">name it</span> whatever you want.
						</p>
					</div>
					<div className="xl:w-1/3 w-3/4 p-4 flex flex-col text-center items-center justify-start relative">
						<img src="https://i.imgur.com/p6ERtSN.png" className="rounded-lg object-contain object-top max-w-full drop-shadow-md" alt="" />

						{/* <p className="my-4 text-xl tracking-wide text-gray-50 italic">Step One</p> */}
						<p className="my-4 text-gray-50 px-2 mx-2 h-20">
							On the screen that pops up, press the <span className="font-bold">Import</span> button. <br />A keyboard will pop up. Paste in the code{' '}
							<span className="text-gray-400 italic">(It'll look something like '#F4EBD0, #0d3537...')</span> that you got from this site, and{' '}
							<span className="text-amber-300">you're done!</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

/*
<p className="absolute flex items-center justify-center top-8 left-8 text-xl font-mono text-blue-950 font-bold ring bg-blue-50 rounded-full text-center h-8 w-8">
	1
</p>
*/
