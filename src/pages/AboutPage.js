import React from 'react';

export const AboutPage = () => {
	return (
		<div className="min-h-screen overflow-hidden bg-neutral-100 font-sans">
			<div className="container mx-auto">
				<div className="flex flex-row md:mt-16 gap-x-4">
					<img src="https://i.imgur.com/nTgQRNM.jpeg" className="rounded-md h-auto max-w-2xl drop-shadow-md" alt="" />
					<div>
						<h2 className="text-4xl font-bold font-mono">I'm Bogo. They call me Bogo sometimes.</h2>

						<p className="text-2xl mt-4">
							I've been on VRChat for about four years on and off. It's always been a great place with greater people, and the most important friendships I've
							had in my life have come from it.
						</p>
					</div>
				</div>

				<div className="flex flex-row md:mt-16 gap-x-4">
					<div className="text-left align-middle flex flex-col">
						<h2 className="text-4xl font-bold font-mono">Why build this?</h2>
						<p className="text-2xl mt-4">
							I made this website to aid in sharing UI themes. The designers for the UI use some complex logic to make their shades, so this site isn't perfect
							by any means. Despite this, it serves as a better way for themes to be created and shared outside of game.
						</p>
					</div>
					<img src="https://i.imgur.com/j6edbOg.jpeg" className="rounded-md h-auto max-w-2xl drop-shadow-md" alt="" />
				</div>
			</div>
		</div>
	);
};
