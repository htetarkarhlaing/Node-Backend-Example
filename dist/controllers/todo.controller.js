"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = exports.todoList = void 0;
const todo_services_1 = require("../services/todo.services");
const todoList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield (0, todo_services_1.find)();
    if (todos.length > 0) {
        res.status(200).json({
            meta: {
                status: 200,
                success: true,
                message: "Todo list fetched successfully.",
            },
            body: todos,
        });
    }
    else {
        res.status(404).json({
            meta: {
                status: 404,
                success: false,
                message: "Todo not found.",
            },
            body: null,
        });
    }
});
exports.todoList = todoList;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, description } = req.body;
    try {
        const createdTodo = yield (0, todo_services_1.create)({
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
    }
    catch (err) {
        res.status(400).json({
            meta: {
                status: 404,
                success: false,
                message: "Something went wrong.",
            },
            body: null,
        });
    }
});
exports.createTodo = createTodo;
//# sourceMappingURL=todo.controller.js.map