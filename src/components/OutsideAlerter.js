import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, callback) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				console.log('Clicked outside!');
				callback();
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, props.callback);

	return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
	children: PropTypes.element.isRequired,
	callback: PropTypes.func.isRequired,
};

export default OutsideAlerter;
