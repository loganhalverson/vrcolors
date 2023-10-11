import React from 'react';
import { Navbar } from '../components/Navbar';
import { ContactList } from '../components/ContactList';

export const AboutPage = () => {
	return (
		<div>
			{/* Fixed Background */}
			<div className="fixed z-[-1] w-full bg-gradient-to-b from-blue-950 to-gray-950 filter saturate-[80%] min-h-screen" />

			{/* Navbar */}
			<Navbar currentPage={'About'} />

			{/* Site Description */}
			<div className="p-2 mx-auto min-w-screen-xl max-w-screen-2xl">
				<div className="flex flex-col mx-6 md:mx-0 md:flex-row md:mt-16 gap-x-12">
					<img src="https://i.imgur.com/n2IlJ5s.png" className="rounded-md object-scale-down object-top max-w-4xl drop-shadow-md flex-[0.2]" alt="" />
					<div className="text-sm md:text-xl leading-relaxed tracking-wide text-neutral-100 text-center md:text-left ">
						<h2 className="text-4xl md:text-5xl font-bold tracking-wider text-center md:text-left my-4 md:my-0">VRColors</h2>

						<p className="mt-6">
							This website seeks to emulate the custom UI themes available to VRChat Plus users. It also serves as a way of sharing these themes, instead of
							prodding someone for a nondescript string of hex values.
						</p>
						<p className="mt-6">
							The safety menu was chosen because it displays all custom colors in clear sections. To recreate every section of the in-game menu is,
							unfortunately, far beyond my pay grade in both skill and time.
						</p>
						<p className="mt-6">
							The website was built with React and TailwindCSS. Check out the{' '}
							<a className="text-blue-600 cursor-pointer hover:underline" href="https://github.com/loganhalverson/vrcolors">
								project repository
							</a>{' '}
							on my GitHub.
						</p>
					</div>
				</div>
			</div>

			<div className="mx-auto my-16 border-t max-w-screen-2xl border-blue-300/50" />

			{/* Personal Section */}
			<div className="max-w-screen-xl p-2 mx-6 md:mx-auto font-sans text-white">
				<div className="flex flex-col md:flex-row gap-x-12">
					<div className="text-center md:text-left align-middle text-sm md:text-xl text-neutral-100 leading-relaxed flex flex-col gap-y-6  flex-[0.8]">
						<h2 className="text-3xl md:text-4xl font-semibold tracking-wider">What's your deal?</h2>
						<p>
							I've been on VRChat for about four years on and off. It's a silly place with silly people, but the most important friendships I've made in my life
							have come from it.
						</p>

						<p>You can find all my socials below. Ask me about the development process of the website! It was a ton of fun to make.</p>

						<ContactList />

						<p>As is tradition with VRC creation, I gotta throw in some of my favorite pictures I've taken over the years. Find them below.</p>
					</div>

					<img src="https://i.imgur.com/j6edbOg.jpeg" className="rounded-lg object-contain object-top max-w-2xl drop-shadow-md flex-[0.2]" alt="" />
				</div>
			</div>

			<div className="mx-auto my-16 border-t max-w-screen-2xl border-blue-300/50" />

			{/* Image gallery component retrieved from https://tailwind-elements.com/docs/standard/components/gallery/ */}
			<div className="container mx-auto mb-16 lg:px-32">
				<div className="flex flex-wrap -m-1 md:-m-2">
					<div className="flex flex-wrap w-1/2">
						<div className="w-1/2 p-1 md:p-2">
							<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://i.imgur.com/mI67QDv.jpeg" />
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://i.imgur.com/OgmMGJ7.jpeg" />
						</div>
						<div className="w-full p-1 md:p-2">
							<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://i.imgur.com/QQHHwKP.jpeg" />
						</div>
					</div>
					<div className="flex flex-wrap w-1/2">
						<div className="w-full p-1 md:p-2">
							<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://i.imgur.com/E9EG4ip.jpeg" />
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://i.imgur.com/epLIYUv.jpeg" />
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://i.imgur.com/fUcOl3w.jpeg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
