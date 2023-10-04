import React from 'react';

export const AboutPage = () => {
	return (
		<div>
			{/* Fixed Background */}
			<div className="fixed z-[-1] w-full bg-gradient-to-b from-blue-950 to-gray-950 filter saturate-[80%] min-h-screen" />

			{/* Navbar */}
			<nav className="bg-white border-gray-200 dark:bg-gray-900 z-10">
				<div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="/" className="flex items-center">
						<svg className="text-white h-6 w-6 mr-2" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"
							/>
						</svg>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VRColors</span>
					</a>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<a
									href="/"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
									Home
								</a>
							</li>
							<li>
								<a
									href="/about"
									className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
									aria-current="page">
									About
								</a>
							</li>

							<li>
								<a
									href="mailto:eldritchBogo@protonmail.com"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Site Description */}
			<div className="min-w-screen-xl max-w-screen-2xl mx-auto p-2">
				<div className="flex flex-row md:mt-16 gap-x-12 ">
					<img src="https://i.imgur.com/n2IlJ5s.png" className="rounded-md object-scale-down object-top max-w-4xl drop-shadow-md flex-[0.2]" alt="" />
					<div className="text-xl text-neutral-100 tracking-wide leading-relaxed">
						<h2 className="text-5xl font-bold tracking-wider">VRColors</h2>

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

			<div className="max-w-screen-2xl mx-auto border-t border-blue-300/50 my-16" />

			{/* Personal Section */}
			<div className="max-w-screen-xl mx-auto text-white font-sans p-2">
				<div className="flex flex-row gap-x-12">
					<div className="text-left align-middle text-xl text-neutral-100 leading-relaxed flex flex-col gap-y-6  flex-[0.8]">
						<h2 className="text-4xl font-semibold tracking-wider">What's your deal?</h2>
						<p>
							I've been on VRChat for about four years on and off. It's a silly place with silly people, but the most important friendships I've made in my life
							have come from it.
						</p>
						<p>
							It's come a long way, and I wanted to give back however I could. Being your classic VR nerd, I graduated with a computer science degree. One whim
							led to another, and now we're here.
						</p>

						<p>
							All that said, I would be remiss if I didn't throw in pictures of my buddies like so many of the worlds I've been to. Find some of my favorite
							pictures below.
						</p>
					</div>

					<img src="https://i.imgur.com/j6edbOg.jpeg" className="rounded-lg object-contain object-top max-w-2xl drop-shadow-md flex-[0.2]" alt="" />
				</div>
			</div>

			<div className="max-w-screen-2xl mx-auto border-t border-blue-300/50 my-16" />

			{/* Image gallery component retrieved from https://tailwind-elements.com/docs/standard/components/gallery/ */}
			<div class="container mx-auto lg:px-32 pb-16">
				<div class="-m-1 flex flex-wrap md:-m-2">
					<div class="flex w-1/2 flex-wrap">
						<div class="w-1/2 p-1 md:p-2">
							<img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://i.imgur.com/mI67QDv.jpeg" />
						</div>
						<div class="w-1/2 p-1 md:p-2">
							<img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://i.imgur.com/OgmMGJ7.jpeg" />
						</div>
						<div class="w-full p-1 md:p-2">
							<img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://i.imgur.com/A5cPQ1s.jpeg" />
						</div>
					</div>
					<div class="flex w-1/2 flex-wrap">
						<div class="w-full p-1 md:p-2">
							<img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://i.imgur.com/E9EG4ip.jpeg" />
						</div>
						<div class="w-1/2 p-1 md:p-2">
							<img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://i.imgur.com/epLIYUv.jpeg" />
						</div>
						<div class="w-1/2 p-1 md:p-2">
							<img alt="gallery" class="block h-full w-full rounded-lg object-cover object-center" src="https://i.imgur.com/fUcOl3w.jpeg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
