"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
//custom imports
const todo_routes_1 = __importDefault(require("./todo.routes"));
routes.use("/todo", todo_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map