"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { String, Boolean } = mongoose_1.Schema.Types;
const todoSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Todo", todoSchema);
//# sourceMappingURL=Todo.model.js.map