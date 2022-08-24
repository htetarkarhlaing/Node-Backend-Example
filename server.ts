// importing required packages
import "dotenv/config";
import express, { Request, NextFunction } from "express";
import cors from "cors";
import mongoose from "mongoose";

//custom imports
import routes from "./routes";
import { SocketUser } from "./interfaces/socket.user";

//ENV
const PORT = process.env.PORT || 8000;

//express server instance
const app = express();
const httpServer = require("http").Server(app);
const io = require("socket.io")(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let connectedUser: SocketUser[] = [];

//routes
app.use(
	"/",
	(req: Request, res: any, next: NextFunction) => {
		res.io = io;
		res.socketUsers = connectedUser;
		next();
	},
	routes
);
app.use("/uploads", express.static(`${__dirname}/uploads`));

//socket event handlers
io.on("connection", function (socket: any) {
	console.log(socket.id);
	console.log("a user connected");
	socket.emit("server", "user connected");
	socket.on("message", (message: any) => {
		socket.emit("new-message", message);
	});
	socket.on("validat-user", (data: any) => {
		connectedUser.push({
			socketId: socket.id,
			dbId: data.uid,
		});
		socket.emit("server", connectedUser);
	});
});

httpServer.listen(PORT, () => {
	mongoose
		.connect(process.env.DATABASE_URL as string)
		.then(() => {
			console.log("Database Connected");
		})
		.catch((err) => {
			console.log(err);
		});
	console.log("server is starting on port", PORT);
});
