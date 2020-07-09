import {Router, Request, Response} from "express";
import visitorRouter from "./visitor.router";

const routes = Router();

routes.use('/visitors', visitorRouter);

export default routes;