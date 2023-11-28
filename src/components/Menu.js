import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { HoverContext } from '../context/HoverContext';
import { BottomTab } from './menu-components/BottomTab';
import { FeatureItem } from './menu-components/FeatureItem';
import { ShieldItem } from './menu-components/ShieldItem';
import { generateShades } from '../utils/Color';
import { Voice, Avatar, IconsAndEmojis, Audio, LightsAndParticles, Shaders, Animations } from './Icons';

export const Menu = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const { hovered, hoverState } = useContext(HoverContext);

	// On background change, generate shades.
	useEffect(() => {
		generateShades('background', setTheme);
	}, [theme.background]);

	return (
		<div className="flex items-center justify-center mx-auto mt-8 flex-nowrap w-fit 3xl:scale-95 3xl:mt-0 4xl:scale-105 4xl:mt-16">
			<div className="flex flex-row h-[48rem] ">
				<div
					id="l-wing"
					className={`self-center h-[90%] p-3 text-center rounded-r-md -scale-x-100 transition
					${hovered.buttons ? hoverState : ''}
					`}
					style={{ backgroundColor: theme.buttons, color: theme.icons }}>
					<svg className={`w-8 transition ${hovered.icons ? hoverState : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							fill="currentColor"
							d="M487 37.1C396.4 53.23 292 95.28 207.5 140C163 163.6 124 187.8 95.39 209.2C81.08 220 69.36 230 60.93 238.6c-8.43 8.7-13.38 16.3-14.65 20.3c-9.04 28.7-3.42 57.7 1.73 84.7c9.55 50.4-3.23 88.9-22.98 126.3c25.24-5.7 45.36-19.8 57-47c8.47-19.8 9.13-37 11.43-57.6c2.3-20.6 6.45-44.2 22.44-73.2l.2-.4l.2-.4c8.8-12.6 26.2-22.2 50-33.4c23.7-11.2 53.6-23 86-35.1c63.8-23.8 137.2-48.7 190.1-71.3c20-30.1 34-74.24 44.6-114.4zm-55 138.2c-51.7 21-116.6 43.1-173.5 64.3c-32.2 12-61.8 23.7-84.6 34.5c-22.6 10.7-38.5 21.6-42.6 27.2c-6.8 12.3-11.1 23.2-14 33.3c83.4-6.5 195.3-31.8 271.3-66.6c27.4-29.7 36.9-59.7 43.4-92.7zm-58 118.8c-79 32.2-182 53.3-260.8 58.6c-.9 5-1.5 9.8-2 14.6c-.4 3.5-.7 7.1-1.1 10.6c72.4 7.5 136.3 4 206.2-6.5c32.6-22.5 49.8-49.6 57.7-77.3zm-78.4 98.2c-62.3 8.1-121.6 10.2-187.6 3.4c-.7 4.5-1.6 9-2.7 13.6c35.9 19.2 98.1 25.8 140.7 24.6c30.2-12.4 41.5-24.8 49.6-41.6zM99.78 426.7c-1.15 2.1-3.14 6.7-4.21 8.9c14.03 20.2 48.73 32.2 88.43 39.3c21.2-8 28.3-15.5 36.5-23c-39.7-1.1-86.7-7.7-120.7-25.2z"
						/>
					</svg>
				</div>

				<div id="center" className="h-fit rounded-xl">
					<div className="border-2 rounded-xl" style={{ borderColor: `${theme.background100}` }}>
						{/* Header */}
						<div className="flex items-center py-4 rounded-t-lg" style={{ backgroundColor: theme.background300, color: theme.text }}>
							<span className="mx-12 text-4xl font-bold tracking-wide">Safety</span>
						</div>

						{/* Menu Container */}
						<div className="p-12 pt-16 rounded-b-lg" style={{ backgroundColor: theme.background500 }}>
							<div className="flex flex-col h-full">
								{/* Shield Levels */}
								<ul className="flex flex-row justify-between gap-x-4">
									<ShieldItem theme={theme} text={'Maximum'} />
									<ShieldItem theme={theme} text={'Normal'} />
									<ShieldItem theme={theme} text={'None'} />
									<ShieldItem theme={theme} text={'Custom'} selected />
								</ul>

								{/* Info Text */}
								<div
									className={`py-2 text-lg font-bold tracking-wide text-center transition 
								${hovered.highlight ? hoverState : ''}
								`}
									style={{ backgroundColor: theme.highlight }}>
									<p className={`transition ${hovered.subtext ? hoverState : ''}`} style={{ color: theme.subtext }}>
										Use the tabs below to see which features are enabled for users of each Trust Rank. <br />
										In Custom mode you can turn features on or off for each Trust Rank.
									</p>
								</div>

								{/* Rank Selector */}
								<ul className="flex flex-row justify-between font-semibold tracking-wider" style={{ backgroundColor: theme.background400 }}>
									<li className="w-full text-[#ccc] text-center py-5 border-b-4 border-blue-700">Visitor</li>
									<li className="w-full text-[#187cfa] text-center py-5">New User</li>
									<li className="w-full text-[#25cd67] text-center py-5">User</li>
									<li className="w-full text-[#ff7b47] text-center py-5">Known User</li>
									<li className="w-full text-[#824ae1] text-center py-5">Trusted User</li>
									<li className="w-full text-[#fffd43] text-center py-5">Friends</li>
								</ul>

								{/* Features */}
								<ul
									className={`flex flex-row flex-wrap items-start justify-center h-full px-24 mb-4 font-semibold rounded-b-lg gap-x-6 `}
									style={{ backgroundColor: theme.background700 }}>
									<FeatureItem theme={theme} text="Voice" icon={Voice.path} viewbox={Voice.viewbox} selected />
									<FeatureItem theme={theme} text="Avatar" icon={Avatar.path} viewbox={Avatar.viewbox} selected />
									<FeatureItem theme={theme} text="User Icons & Emojis" icon={IconsAndEmojis.path} viewbox={IconsAndEmojis.viewbox} selected />
									<FeatureItem theme={theme} text="Audio" icon={Audio.path} viewbox={Audio.viewbox} selected />
									<FeatureItem theme={theme} text="Lights & Particles" icon={LightsAndParticles.path} viewbox={LightsAndParticles.viewbox} />
									<FeatureItem theme={theme} text="Shaders" icon={Shaders.path} viewbox={Shaders.viewbox} selected />
									<FeatureItem theme={theme} text="Custom Animations" icon={Animations.path} viewbox={Animations.viewbox} />
								</ul>
							</div>
						</div>
					</div>
					<div id="bottom" className="w-full">
						<ul className="flex justify-center">
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} selected />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
							<BottomTab theme={theme} />
						</ul>
					</div>
				</div>

				<div
					id="r-wing"
					className={`self-center h-[90%] p-3 text-center rounded-r-md transition
					${hovered.buttons ? hoverState : ''}`}
					style={{ backgroundColor: theme.buttons, color: theme.icons }}>
					<svg className={`w-8 transition ${hovered.icons ? hoverState : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							fill="currentColor"
							d="M487 37.1C396.4 53.23 292 95.28 207.5 140C163 163.6 124 187.8 95.39 209.2C81.08 220 69.36 230 60.93 238.6c-8.43 8.7-13.38 16.3-14.65 20.3c-9.04 28.7-3.42 57.7 1.73 84.7c9.55 50.4-3.23 88.9-22.98 126.3c25.24-5.7 45.36-19.8 57-47c8.47-19.8 9.13-37 11.43-57.6c2.3-20.6 6.45-44.2 22.44-73.2l.2-.4l.2-.4c8.8-12.6 26.2-22.2 50-33.4c23.7-11.2 53.6-23 86-35.1c63.8-23.8 137.2-48.7 190.1-71.3c20-30.1 34-74.24 44.6-114.4zm-55 138.2c-51.7 21-116.6 43.1-173.5 64.3c-32.2 12-61.8 23.7-84.6 34.5c-22.6 10.7-38.5 21.6-42.6 27.2c-6.8 12.3-11.1 23.2-14 33.3c83.4-6.5 195.3-31.8 271.3-66.6c27.4-29.7 36.9-59.7 43.4-92.7zm-58 118.8c-79 32.2-182 53.3-260.8 58.6c-.9 5-1.5 9.8-2 14.6c-.4 3.5-.7 7.1-1.1 10.6c72.4 7.5 136.3 4 206.2-6.5c32.6-22.5 49.8-49.6 57.7-77.3zm-78.4 98.2c-62.3 8.1-121.6 10.2-187.6 3.4c-.7 4.5-1.6 9-2.7 13.6c35.9 19.2 98.1 25.8 140.7 24.6c30.2-12.4 41.5-24.8 49.6-41.6zM99.78 426.7c-1.15 2.1-3.14 6.7-4.21 8.9c14.03 20.2 48.73 32.2 88.43 39.3c21.2-8 28.3-15.5 36.5-23c-39.7-1.1-86.7-7.7-120.7-25.2z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};
