"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.find = void 0;
const models_1 = require("../models");
const find = () => {
    return models_1.Todo.find();
};
exports.find = find;
const create = ({ title, description }) => {
    const newTodo = new models_1.Todo({
        title: title,
        description: description,
    });
    return newTodo.save();
};
exports.create = create;
//# sourceMappingURL=todo.services.js.map