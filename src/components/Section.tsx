import React, { PropsWithChildren } from 'react';

const Section: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="mx-auto w-full max-w-screen-lg px-4 py-6">
			{children}
		</div>
	);
};

export default Section;
