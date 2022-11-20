import React, { useState } from 'react';
import TodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
	const [
		tasks,
		setTasks
	] = useState('');

	const createTask = (newTask) => {
		setTasks((tasks) => [
			...tasks,
			{ newTask }
		]);
	};

	function removeTask(task) {
		setTasks(tasks.filter((t) => t.newTask.task !== task));
	}

	function listTasksIfAny() {
		if (tasks.length > 0) {
			return (
				<div>
					<ol>
						{tasks.map((t, i) => (
							<li key={uuid()}>
								<Todo task={t.newTask.task} />
								<button className="remove-task" onClick={() => removeTask(t.newTask.task)}>
									x
								</button>
							</li>
						))}
					</ol>
				</div>
			);
		}
	}

	return (
		<div>
			{' '}
			<h1>To Do: </h1>
			{<TodoForm createTask={createTask} />}
			{listTasksIfAny()}
		</div>
	);
};

export default TodoList;
