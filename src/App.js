import { useEffect, useState } from 'react';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';

function App() {
	// Main Theme State. I'm not sure where this should go yet, so for the moment it resides here.
	const [theme, setTheme] = useState({
		highlight: '#6be4f9',
		icons: '#2aabc1',
		buttons: '#0d3537',
		background: '#1b222c',
		text: '#bbbbbb',
		subtext: '#008489',
	});

	useEffect(() => {
		generateShades();
	}, []);

	const shadeColor = (color, percent) => {
		var R = parseInt(color.substring(1, 3), 16);
		var G = parseInt(color.substring(3, 5), 16);
		var B = parseInt(color.substring(5, 7), 16);

		R = parseInt((R * (100 + percent)) / 100);
		G = parseInt((G * (100 + percent)) / 100);
		B = parseInt((B * (100 + percent)) / 100);

		R = R < 255 ? R : 255;
		G = G < 255 ? G : 255;
		B = B < 255 ? B : 255;

		R = Math.round(R);
		G = Math.round(G);
		B = Math.round(B);

		var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
		var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
		var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

		return '#' + RR + GG + BB;
	};

	const generateShades = () => {
		setTheme((prevTheme) => {
			return {
				...prevTheme,
				background500: `${shadeColor(prevTheme.background, -60)}`,
				background400: `${shadeColor(prevTheme.background, -50)}`,
				background300: `${shadeColor(prevTheme.background, -30)}`,
				background200: `${shadeColor(prevTheme.background, -25)}`,
				background100: `${shadeColor(prevTheme.background, -10)}`,
			};
		});
	};

	return (
		<div className="flex min-h-screen flex-row items-center overflow-hidden bg-gray-300 font-sans">
			{/* Prop drilling?.. */}
			<Sidebar theme={theme} setTheme={setTheme} generateShades={generateShades} />

			<div className="container mx-auto ">
				<Menu theme={theme} />
			</div>
		</div>
	);
}

export default App;
