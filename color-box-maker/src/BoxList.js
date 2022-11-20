import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

const BoxList = () => {
	const [
		boxes,
		setBoxes
	] = useState('');

	const createBox = (newBox) => {
		setBoxes((boxes) => [
			...boxes,
			{ newBox }
		]);
	};

	function showBoxes() {
		if (boxes.length > 0) {
			return (
				<div>
					{' '}
					{boxes.map((b) => (
						<Box
							key={uuid()}
							height={b.newBox.height}
							width={b.newBox.width}
							backgroundColor={b.newBox.backgroundColor}
						/>
					))}
				</div>
			);
		}
	}

	return (
		<div>
			<h1> Color Box Maker</h1>
			<NewBoxForm createBox={createBox} />
			{showBoxes()}
		</div>
	);
};

export default BoxList;
