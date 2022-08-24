import { Router } from "express";
import { createTodo, todoList } from "../controllers/todo.controller";

const todo = Router();

todo.get("/", todoList);
todo.post("/", createTodo);

export default todo;
