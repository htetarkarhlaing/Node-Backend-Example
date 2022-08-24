import { Router } from "express";

const routes = Router();

//custom imports
import todo from "./todo.routes";

routes.use("/todo", todo);

export default routes;
