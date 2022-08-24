import { Request, Response } from "express";
import { find, create } from "../services/todo.services";
import { TodoCreateProps } from "../interfaces/todo";

export const todoList = async (req: Request, res: Response) => {
	const todos = await find();
	if (todos.length > 0) {
		res.status(200).json({
			meta: {
				status: 200,
				success: true,
				message: "Todo list fetched successfully.",
			},
			body: todos,
		});
	} else {
		res.status(404).json({
			meta: {
				status: 404,
				success: false,
				message: "Todo not found.",
			},
			body: null,
		});
	}
};

export const createTodo = async (req: Request, res: Response) => {
	let { title, description }: TodoCreateProps = req.body;
	try {
		const createdTodo = await create({
			title,
			description,
		});

		res.status(201).json({
			meta: {
				status: 201,
				success: true,
				message: "Todo created successfully.",
			},
			body: createdTodo,
		});
	} catch (err) {
		res.status(400).json({
			meta: {
				status: 404,
				success: false,
				message: "Something went wrong.",
			},
			body: null,
		});
	}
};
