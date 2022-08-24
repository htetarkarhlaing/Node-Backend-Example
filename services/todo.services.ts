import { Todo } from "../models";
import { TodoCreateProps } from "../interfaces/todo";

export const find = () => {
	return Todo.find();
};

export const create = ({ title, description }: TodoCreateProps) => {
	const newTodo = new Todo({
		title: title,
		description: description,
	});

	return newTodo.save();
};
