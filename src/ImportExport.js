/*
    A class for handling the import and export of palette codes.
    EX: #F4EBD0,#B68D40,#0F0F10,#0F0F10,#D6AD60,#B68D40
*/

// Returns a theme object created from the input palette code.
// EX: '{'highlight': '#aaa', 'icons': '#bbb', ...}
export const importCode = (input) => {
	// Define the keys in the desired order
	const keys = ['highlight', 'icons', 'buttons', 'background', 'text', 'subtext'];

	// Remove any whitespace and non-hex characters from the input
	const cleanedInput = input.replace(/[^a-fA-F0-9]/g, '');

	// Check if the cleaned input has the correct length
	if (cleanedInput.length !== 6 * keys.length) {
		throw new Error('Invalid input string length');
	}

	// Split the cleaned input into an array of 6-character chunks
	const hexChunks = cleanedInput.match(/.{1,6}/g);

	// Create an object by mapping the keys to the hex chunks
	const result = {};
	keys.forEach((key, index) => {
		result[key] = `#${hexChunks[index]}`;
	});

	return result;
};

// Returns a palette code string.
// EX: '#6be4f9,#2aabc1,#0d3537,#1b222c,#bbbbbb,#008489'
export const exportCode = (theme) => {
	const keys = ['highlight', 'icons', 'buttons', 'background', 'text', 'subtext'];
	let res = '';

	try {
		keys.forEach((key) => {
			res += `${theme[key]},`;
		});
	} catch (e) {
		console.error('Invalid theme object provided to exportCode().');
		console.error(e.message);
		return '';
	}

	return res.slice(0, -1);
};
