import { ColorPicker } from './components/ColorPicker';
import { Menu } from './components/Menu';

function App() {
	return (
		<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-300 py-6 font-sans">
			<div className="container mx-auto">
				<Menu />
			</div>
		</div>
	);
}

export default App;
