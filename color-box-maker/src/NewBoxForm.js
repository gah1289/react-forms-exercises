import React, { useState } from 'react';

const NewBoxForm = ({ createBox }) => {
	const INITIAL_STATE = {
		width           : '',
		height          : '',
		backgroundColor : ''
	};

	const [
		formData,
		setFormData
	] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createBox({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="height">Box Height (px)</label>
			<input id="height" type="text" name="height" value={formData.height} onChange={handleChange} />
			<label htmlFor="width">Box Width (px)</label>
			<input id="width" type="text" name="width" value={formData.width} onChange={handleChange} />
			<label htmlFor="backgroundColor">Background Color</label>
			<input
				id="backgroundColor"
				type="text"
				name="backgroundColor"
				value={formData.backgroundColor}
				onChange={handleChange}
			/>
			<button>Add Box</button>
		</form>
	);
};

export default NewBoxForm;
