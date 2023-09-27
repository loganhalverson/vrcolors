/*
    A helper class to hold various color functions.
*/
// Function retrieved from https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
export const shadeHexColor = (color, percent) => {
	var f = parseInt(color.slice(1), 16),
		t = percent < 0 ? 0 : 255,
		p = percent < 0 ? percent * -1 : percent,
		R = f >> 16,
		G = (f >> 8) & 0x00ff,
		B = f & 0x0000ff;
	return (
		'#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)
	);
};

// Function retrieved from https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin
export const blendHexColors = (c0, c1, p) => {
	var f = parseInt(c0.slice(1), 16),
		t = parseInt(c1.slice(1), 16),
		R1 = f >> 16,
		G1 = (f >> 8) & 0x00ff,
		B1 = f & 0x0000ff,
		R2 = t >> 16,
		G2 = (t >> 8) & 0x00ff,
		B2 = t & 0x0000ff;
	return (
		'#' +
		(0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 + (Math.round((G2 - G1) * p) + G1) * 0x100 + (Math.round((B2 - B1) * p) + B1)).toString(16).slice(1)
	);
};

// Function retrieved from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
const hexToRgb = (hex) => {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
};

// Function retrieved from https://www.30secondsofcode.org/js/s/rgb-to-hsl/
const RGBToHSL = ({ r, g, b }) => {
	r /= 255;
	g /= 255;
	b /= 255;
	const l = Math.max(r, g, b);
	const s = l - Math.min(r, g, b);
	const h = s ? (l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s) : 0;
	return [60 * h < 0 ? 60 * h + 360 : 60 * h, 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0), (100 * (2 * l - s)) / 2];
};

// Given a HEX color, returns it's equivalent HSL light value.
export const getLightness = (color) => {
	return RGBToHSL(hexToRgb(color))[2];
};

// Given a key (theme.background, theme.highlight, etc.), generates Tailwind shades for that color
// and appends them to the given state object.
export const generateShades = (key, setTheme) => {
	setTheme((prevTheme) => {
		return {
			...prevTheme,
			[`${key}900`]: `${shadeHexColor(prevTheme[`${key}`], -0.85)}`,
			[`${key}800`]: `${shadeHexColor(prevTheme[`${key}`], -0.6)}`,
			[`${key}700`]: `${shadeHexColor(prevTheme[`${key}`], -0.4)}`,
			[`${key}600`]: `${shadeHexColor(prevTheme[`${key}`], -0.3)}`,
			[`${key}500`]: `${shadeHexColor(prevTheme[`${key}`], 0)}`,
			[`${key}400`]: `${shadeHexColor(prevTheme[`${key}`], 0.1)}`,
			[`${key}300`]: `${shadeHexColor(prevTheme[`${key}`], 0.2)}`,
			[`${key}200`]: `${shadeHexColor(prevTheme[`${key}`], 0.3)}`,
			[`${key}100`]: `${shadeHexColor(prevTheme[`${key}`], 0.4)}`,
		};
	});
};
