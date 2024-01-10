import React from 'react';
import { Navbar } from '../components/Navbar';
import { ContactList } from '../components/About/ContactList';

export const AboutPage = () => {
	return (
		<div>
			{/* Fixed Background */}
			<div className="fixed z-[-1] min-h-screen w-full bg-gradient-to-b from-blue-950 to-gray-950 saturate-[80%] filter" />

			{/* Navbar */}
			<Navbar />

			{/* Site Description */}
			<div className="min-w-screen-xl mx-auto h-auto max-w-screen-2xl p-4">
				<div className="block items-center justify-center gap-x-12 md:flex md:flex-row">
					<img
						src="https://i.imgur.com/n2IlJ5s.png"
						className="mx-auto flex-[0.2] rounded-md object-scale-down object-top drop-shadow-md md:max-w-4xl"
						alt="VRChat Menu Picture"
					/>
					<div className="text-center text-sm leading-relaxed tracking-wide text-neutral-100 md:text-left md:text-xl ">
						<h2 className="my-8 text-center text-4xl font-bold tracking-wider md:my-0 md:text-left md:text-5xl">
							VRColors
						</h2>

						<p className="mt-6">
							This website seeks to emulate the custom UI themes available to VRChat Plus users. It also
							serves as a way of sharing these themes, instead of prodding someone for a nondescript
							string of hex values.
						</p>
						<p className="mt-6">
							The safety menu was chosen because it displays all custom colors in clear sections. To
							recreate every section of the in-game menu is, unfortunately, far beyond my pay grade in
							both skill and time.
						</p>
						<p className="mt-6">
							The website was built with React and TailwindCSS. Check out the{' '}
							<a
								className="cursor-pointer text-blue-600 hover:underline"
								href="https://github.com/loganhalverson/vrcolors"
							>
								project repository
							</a>{' '}
							on my GitHub.
						</p>
					</div>
				</div>
			</div>

			<div className="mx-auto my-16 max-w-screen-2xl border-t border-blue-300/50" />

			{/* Personal Section */}
			<div className="mx-6 max-w-screen-xl p-2 font-sans text-white md:mx-auto">
				<div className="gap-x-12 md:flex md:flex-row">
					<div className="flex flex-[0.8] flex-col gap-y-8 text-center align-middle text-sm leading-relaxed text-neutral-100 md:text-xl">
						<h2 className="text-center text-4xl font-bold tracking-wider md:my-0 md:text-5xl">
							What's your deal?
						</h2>
						<p>
							I've been on VRChat for about four years on and off. It's a silly place with silly people,
							but the most important friendships I've made in my life have come from it.
						</p>
						<p>
							You can find all my socials below. Ask me about the development process! It was a ton of fun
							to make.
						</p>
						<ContactList />
						<p>
							As is tradition, I gotta throw in some of my favorite pictures I've taken over the years.
							Find them below.
						</p>
					</div>
					<img
						src="https://i.imgur.com/j6edbOg.jpeg"
						className="mx-auto hidden flex-[0.2] rounded-lg object-contain object-top drop-shadow-md md:block md:max-w-2xl"
						alt=""
					/>
				</div>
			</div>

			<div className="mx-auto my-16 max-w-screen-2xl border-t border-blue-300/50" />

			{/* Image gallery component retrieved from https://tailwind-elements.com/docs/standard/components/gallery/ */}
			<div className="container mx-auto mb-16 lg:px-32">
				<div className="-m-1 flex flex-wrap md:-m-2">
					<div className="flex w-1/2 flex-wrap">
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.imgur.com/mI67QDv.jpeg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.imgur.com/OgmMGJ7.jpeg"
							/>
						</div>
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.imgur.com/QQHHwKP.jpeg"
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.imgur.com/E9EG4ip.jpeg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.imgur.com/epLIYUv.jpeg"
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://i.imgur.com/fUcOl3w.jpeg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
