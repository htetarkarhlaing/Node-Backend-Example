"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing required packages
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
//custom imports
const routes_1 = __importDefault(require("./routes"));
//ENV
const PORT = process.env.PORT || 8000;
//express server instance
const app = (0, express_1.default)();
const httpServer = require("http").Server(app);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
let connectedUser = [];
//routes
app.use("/", (req, res, next) => {
    res.io = io;
    res.socketUsers = connectedUser;
    next();
}, routes_1.default);
app.use("/uploads", express_1.default.static(`${__dirname}/uploads`));
//socket event handlers
io.on("connection", function (socket) {
    console.log(socket.id);
    console.log("a user connected");
    socket.emit("server", "user connected");
    socket.on("message", (message) => {
        socket.emit("new-message", message);
    });
    socket.on("validat-user", (data) => {
        connectedUser.push({
            socketId: socket.id,
            dbId: data.uid,
        });
        socket.emit("server", connectedUser);
    });
});
httpServer.listen(PORT, () => {
    mongoose_1.default
        .connect(process.env.DATABASE_URL)
        .then(() => {
        console.log("Database Connected");
    })
        .catch((err) => {
        console.log(err);
    });
    console.log("server is starting on port", PORT);
});
//# sourceMappingURL=server.js.map