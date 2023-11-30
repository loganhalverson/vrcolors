/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1760px',
				'4xl': '1980px',
			},
			animation: {
				'bogo-idle': 'idle alternate-reverse 4s infinite',
			},
			keyframes: {
				idle: {
					from: { transform: 'translateY(0px)' },
					to: { transform: 'translateY(8px)' },
				},
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss', require('tailwindcss-inner-border')],
};
