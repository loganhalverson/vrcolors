import React, { createContext, useState, useEffect } from 'react';
import emitter from './EventBus';

// Create a context
const HoverContext = createContext();

// Create context provider
const HoverProvider = ({ children }) => {
	// Create theme with default values
	const [hovered, setHovered] = useState({ highlight: false, icons: false, background: false, buttons: false, text: false, subtext: false });

	// Set up event listeners using useEffect
	useEffect(() => {
		const highlightListener = (bool) => setHovered({ ...hovered, highlight: bool });
		const iconsListener = (bool) => setHovered({ ...hovered, icons: bool });
		const backgroundListener = (bool) => setHovered({ ...hovered, background: bool });
		const buttonsListener = (bool) => setHovered({ ...hovered, buttons: bool });
		const textListener = (bool) => setHovered({ ...hovered, text: bool });
		const subtextListener = (bool) => setHovered({ ...hovered, subtext: bool });

		emitter.on('HIGHLIGHT-HOVER', highlightListener);
		emitter.on('ICONS-HOVER', iconsListener);
		emitter.on('BACKGROUND-HOVER', backgroundListener);
		emitter.on('BUTTONS-HOVER', buttonsListener);
		emitter.on('TEXT-HOVER', textListener);
		emitter.on('SUBTEXT-HOVER', subtextListener);

		// Clean up the event listeners when the component unmounts
		return () => {
			emitter.off('HIGHLIGHT-HOVER', highlightListener);
			emitter.off('ICONS-HOVER', iconsListener);
			emitter.off('BACKGROUND-HOVER', backgroundListener);
			emitter.off('BUTTONS-HOVER', buttonsListener);
			emitter.off('TEXT-HOVER', textListener);
			emitter.off('SUBTEXT-HOVER', subtextListener);
		};
	}, [hovered]);

	// When an item's respective color picker is hovered, apply these styles.
	const hoverState = 'brightness-[1.25] saturate-[1.25]';

	// Provide the state and functions to child components
	const contextValue = {
		hovered,
		setHovered,
		hoverState,
	};

	return <HoverContext.Provider value={contextValue}>{children}</HoverContext.Provider>;
};

// Export the context and the custom hook
export { HoverContext, HoverProvider };
