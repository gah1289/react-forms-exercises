import React, { useState } from 'react';

const NewTodoForm = ({ createTask }) => {
	const INITIAL_STATE = {
		task : ''
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
		createTask({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			{' '}
			<label htmlFor="task">New Task: </label>
			<input
				id="task"
				type="text"
				name="task"
				value={formData.task}
				placeholder="Enter task here"
				onChange={handleChange}
			/>
			<button>Add Task</button>
		</form>
	);
};

export default NewTodoForm;
