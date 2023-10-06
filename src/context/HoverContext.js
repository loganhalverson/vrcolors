import React, { createContext, useState } from 'react';
import emitter from './EventBus';

// Create a context
const HoverContext = createContext();

// Create context provider
const HoverProvider = ({ children }) => {
	// Create theme with default values
	const [hovered, setHovered] = useState({ highlight: false, icons: false, background: false, buttons: false, text: false, subtext: false });

	// Should I be putting this here? I'm not too sure where the emitter should live.
	emitter.on('HIGHLIGHT-HOVER', (bool) => setHovered({ ...hovered, highlight: bool }));
	emitter.on('ICONS-HOVER', (bool) => setHovered({ ...hovered, icons: bool }));
	emitter.on('BACKGROUND-HOVER', (bool) => setHovered({ ...hovered, background: bool }));
	emitter.on('BUTTONS-HOVER', (bool) => setHovered({ ...hovered, buttons: bool }));
	emitter.on('TEXT-HOVER', (bool) => setHovered({ ...hovered, text: bool }));
	emitter.on('SUBTEXT-HOVER', (bool) => setHovered({ ...hovered, subtext: bool }));

    // When an item's respective color picker is hovered, apply these styles.
	const hoverState = 'brightness-[1.25] saturate-[1.25]';

	// Provide the state and functions to child components
	const contextValue = {
		hovered,
		setHovered,
        hoverState
	};

	return <HoverContext.Provider value={contextValue}>{children}</HoverContext.Provider>;
};

// Export the context and the custom hook
export { HoverContext, HoverProvider };
