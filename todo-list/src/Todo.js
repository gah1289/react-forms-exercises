import React, { useState } from 'react';
import './Todo.css';

const Todo = ({ task }) => {
	return <div className="Todo">{task}</div>;
};

export default Todo;
