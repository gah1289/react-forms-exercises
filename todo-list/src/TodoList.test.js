import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import { remove } from '../../../es2015-module-exercise/src/helpers';

function addTask(todoList, task = 'Feed Hopper and Hank') {
	const taskInput = todoList.getByLabelText('New Task:');
	fireEvent.change(taskInput, { target: { value: task } });
	const button = todoList.getByText('Add Task');
	fireEvent.click(button);
}

function removeTask(todoList) {
	const removeButton = todoList.getByText('x');
	fireEvent.click(removeButton);
}

it('renders without crashing', function() {
	render(<TodoList />);
});

it('matches snapshot', function() {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new item', function() {
	// no tasks on page yet
	expect(screen.queryByText('Feed Hopper and Hank')).not.toBeInTheDocument();
});

it('adds a task', function() {
	// task exists after adding it
	const todoList = render(<TodoList />);
	addTask(todoList);
	expect(screen.getByText('Feed Hopper and Hank')).toBeInTheDocument();
});

it('removes a task', function() {
	// task exists after adding it
	const todoList = render(<TodoList />);
	addTask(todoList);
	const task = screen.getByText('Feed Hopper and Hank');
	expect(task).toBeInTheDocument();
	removeTask(todoList);
	expect(task).not.toBeInTheDocument();
});
