import React, { useState, useEffect } from 'react';
import emitter from '../context/EventBus';
import { toast } from 'react-toastify';
import { convertURLToPaletteCode } from '../utils/ImportExport';
import { useParams } from 'react-router-dom';

export const ExportPanel = () => {
	const [visible, setVisible] = useState(false);
	const { paletteCode } = useParams();

	const toastStyles = {
		success: {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'dark',
		},
		error: {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'dark',
		},
	};

	// Writes the parameter input to the user's clipboard.
	const copyContent = async (input) => {
		try {
			await navigator.clipboard.writeText(input);
		} catch (error) {
			toast.error(`${error.name}: Unable to write to clipboard. Enable permissions and try again.`, toastStyles.error);
		}
	};

	const exportPalette = async () => {
		try {
			const exportedCode = convertURLToPaletteCode(paletteCode);
			copyContent(exportedCode);
			setVisible(false);
			toast.success('Successfully copied palette code to clipboard.', toastStyles.success);
		} catch (error) {
			switch (error.message) {
				case 'InvalidPalette':
					toast.error(`${error.name}: An invalid palette code was provided in the URL.`, toastStyles.error);
					console.error(error.message);
					break;
				default:
					toast.error(`${error.name}: An unexpected error has occured.`, toastStyles.error);
					console.error(error.message);
					break;
			}
		}
	};

	const exportLink = () => {
		copyContent(window.location.href);
		setVisible(false);
		toast.success('Successfully copied link to clipboard.', toastStyles.success);
	};

	// Set up emit listeners using useEffect
	useEffect(() => {
		const exportListener = (bool) => setVisible(bool);
		emitter.on('EXPORT-EVENT', exportListener);
		return () => {
			emitter.off('EXPORT-EVENT', exportListener);
		};
	}, [visible]);

	return (
		<>
			{visible && (
				<>
					<div className="fixed left-0 top-0 w-full z-10">
						<div className="flex min-h-screen items-center justify-center">
							{/* Transparent Overlay */}
							<div className="absolute min-h-screen left-0 top-0 bg-black w-full opacity-80" onClick={() => setVisible(!visible)} />

							<div className="rounded-xl bg-neutral-900 z-10">
								{/* Header Container */}
								<div className="relative border-neutral-700 py-4 text-center font-semibold text-white rounded-xl bg-[#0D3537] rounded-b-none border-b">
									<p className="text-2xl ">Export Palette</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="absolute left-2 top-0 translate-y-1/2 h-8 cursor-pointer"
										onClick={() => setVisible(!visible)}
										viewBox="0 0 24 24">
										<path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
									</svg>
								</div>

								{/* Link Container */}
								<div className="flex flex-row items-center justify-center text-center">
									<div
										onClick={() => exportLink()}
										className="flex w-1/2 flex-none cursor-pointer flex-col items-center  p-4 px-16 py-16 text-white group focus:bg-slate-800">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-24 -rotate-45 group-hover:text-teal-500 transition duration-300 group-hover:scale-105"
											viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M11 17H7q-2.075 0-3.537-1.463T2 12q0-2.075 1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4v2Zm-3-4v-2h8v2H8Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17h-4Z"
											/>
										</svg>
										<p className="mt-2 text-2xl font-semibold tracking-wide group-hover:text-teal-500 transition duration-300">Page Link</p>
										<p className="leading-8 tracking-tight text-gray-300 ">for sharing with others.</p>
										<p className="mt-4 tracking-tight text-gray-600 ">https://vrcolors/color/...</p>
									</div>
									<div
										onClick={() => exportPalette()}
										className="flex w-1/2 flex-none cursor-pointer flex-col items-center group p-4 px-16 py-16 text-white  hover:text-teal-400 focus:bg-slate-800">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-24 group-hover:text-teal-500 transition duration-300 group-hover:scale-105"
											viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4h-2M9.53 9l-1.06 6h6l1.06-6h-6Z"
											/>
										</svg>
										<p className="mt-2 text-2xl font-semibold tracking-wide group-hover:text-teal-500 transition duration-300">Palette Code</p>
										<p className="leading-8 tracking-tight text-gray-300">for using in-game.</p>
										<p className="mt-4 max-w-md text-clip tracking-tight text-gray-600">#F4EBD0,#B68D40,#0F0F10...</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
