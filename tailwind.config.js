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
				'bogo-idle': 'idle alternate-reverse 3s cubic-bezier(.71,0,.42,1.01) infinite',
			},
			keyframes: {
				idle: {
					from: { transform: 'translateY(-4px)' },
					to: { transform: 'translateY(6px)' },
				},
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
