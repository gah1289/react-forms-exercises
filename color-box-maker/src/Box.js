import React, { useState } from 'react';

import './Box.css';

const Box = ({ backgroundColor, width, height }) => {
	const [
		hideBox,
		setHideBox
	] = useState(false);

	return (
		<div
			className={` Box ${hideBox ? 'hide-box' : ''}`}
			style={{ backgroundColor, width: Number(width), height: Number(height) }}
		>
			{' '}
			<button onClick={() => setHideBox(true)} className={`delete-btn`}>
				x
			</button>
		</div>
	);
};

export default Box;
