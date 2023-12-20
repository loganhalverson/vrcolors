export const NotFoundPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-y-4 bg-gray-900 text-white">
			<svg className="h-32 w-32" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm-1-4h2V7h-2v6Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
				/>
			</svg>
			<h2 className="text-4xl tracking-wider">Whoops!</h2>
			<p className="text-2xl">The requested page was not found.</p>
			<a className="text-2xl text-blue-400 hover:underline" href="/">
				Go back home?
			</a>
		</div>
	);
};
