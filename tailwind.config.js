/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1760px',
				'4xl': '1980px',
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss', require('tailwindcss-inner-border')],
};
