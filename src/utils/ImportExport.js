/*
    A class for handling the import and export of palette codes.
    EX: #F4EBD0,#B68D40,#0F0F10,#0F0F10,#D6AD60,#B68D40
	URL-SAFE-EXAMPLE: F4EBD0-B68D40-0F0F10-0F0F10-D6AD60-B68D40
	URL-DEFAULT: 6BE4F9-2AABC1-0D3537-1B222C-BBBBBB-008489
*/

export const convertURLToPaletteCode = (input) => {
	const cleanedInput = input.replace(/[^a-fA-F0-9]/g, '');
	if (cleanedInput.length !== 36) {
		console.error('Invalid palette code provided to convertURLToPaletteCode.');
		throw new Error('InvalidPalette');
	}

	const hexChunks = cleanedInput.match(/.{1,6}/g);
	if (!hexChunks) {
		console.error('Invalid palette code provided to convertPaletteCodeToTheme().');
		throw new Error('InvalidPalette');
	}

	let res = '';
	hexChunks.forEach((chunk, index) => {
		if (index === 5) res += `#${chunk}`;
		else res += `#${chunk},`;
	});

	return res;
};

// Returns a theme object created from the input palette code.
// EX: '{'highlight': '#aaa', 'icons': '#bbb', ...}
export const convertPaletteCodeToTheme = (input) => {
	// Define the keys in the desired order
	const keys = ['highlight', 'icons', 'buttons', 'background', 'text', 'subtext'];

	// Remove any whitespace and non-hex characters from the input
	const cleanedInput = input.replace(/[^a-fA-F0-9]/g, '');
	if (cleanedInput.length !== 6 * keys.length) {
		console.error('Invalid palette code provided to convertPaletteCodeToTheme().');
		throw new Error('InvalidPalette');
	}

	// Split the cleaned input into an array of 6-character chunks
	const hexChunks = cleanedInput.match(/.{1,6}/g);
	if (!hexChunks) {
		console.error('Invalid palette code provided to convertPaletteCodeToTheme().');
		throw new Error('InvalidPalette');
	}

	// Create an object by mapping the keys to the hex chunks
	const result = {};
	keys.forEach((key, index) => {
		result[key] = `#${hexChunks[index]}`;
	});

	return result;
};

// Returns a palette code string.
// EX: theme object -> '#6be4f9,#2aabc1,#0d3537,#1b222c,#bbbbbb,#008489'
export const convertThemeToPaletteCode = (theme) => {
	const keys = ['highlight', 'icons', 'buttons', 'background', 'text', 'subtext'];
	let res = '';

	try {
		keys.forEach((key) => {
			res += `${theme[key]},`;
		});
	} catch (e) {
		console.error('Invalid theme object provided to convertThemeToCode().');
		console.error(e.message);
		return '';
	}

	return res.slice(0, -1);
};
