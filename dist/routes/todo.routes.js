"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller");
const todo = (0, express_1.Router)();
todo.get("/", todo_controller_1.todoList);
todo.post("/", todo_controller_1.createTodo);
exports.default = todo;
//# sourceMappingURL=todo.routes.js.map