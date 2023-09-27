import { useEffect, useState } from 'react';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';
import { generateShades } from './Color';

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
		// TODO - reconsider how we're implementing this. should we generate all of our shades for each key on mount?
		generateShades('background', setTheme);
	}, []);

	return (
		<div className="flex min-h-screen flex-row items-center overflow-hidden bg-gradient-to-r from-neutral-200 from-10% via-blue-200  to-neutral-200 to-90% font-sans">
			{/* Prop drilling?.. */}
			<Sidebar setTheme={setTheme} />

			<div className="container mx-auto ">
				<Menu theme={theme} />
			</div>
		</div>
	);
}

export default App;
