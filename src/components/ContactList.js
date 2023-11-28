import React from 'react';

export const ContactList = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="flex justify-center items-center flex-wrap gap-x-8">
				{/* Email */}
				<a href="mailto:eldritchBogo@protonmail.com" className="block text-neutral-100 hover:text-blue-600 transition">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 aspect-square" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z"
						/>
					</svg>
				</a>

				{/* Github */}
				<a href="https://github.com/loganhalverson" className="block text-neutral-100 hover:text-blue-600 transition">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 aspect-square" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"
						/>
					</svg>
				</a>

				{/* Discord */}
				<div className="relative group">
					<p className="block text-neutral-100 hover:text-blue-600 transition">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 aspect-square" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
							/>
						</svg>
					</p>
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 bg-gray-950 rounded-lg py-1 px-2 text-center text-gray-50 transition scale-0 group-hover:-translate-y-[4.5rem] group-hover:scale-100">
						@biscuitbasket.
					</span>
				</div>

				{/* VRC */}
				<a href="https://vrchat.com/home/user/usr_ff8ccfd8-d9f2-425a-8c6f-017da35f7153" className="block text-neutral-100 hover:text-blue-600 transition">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 aspect-square" viewBox="0 0 16 16">
						<path
							fill="currentColor"
							d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
						/>
						<path
							fill="currentColor"
							d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11zm6.387-5.999H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989c0 .633-.408.95-1.067.95H9.673z"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};
