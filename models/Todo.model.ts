import { Schema, model } from "mongoose";

const { String, Boolean } = Schema.Types;

const todoSchema = new Schema(
	{
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
	},
	{
		timestamps: true,
	}
);

export default model("Todo", todoSchema);
