import {Router} from "express";
import {authenticateUser} from "../controller/auth.controller";

const authRouter = Router();

authRouter.post("/login", authenticateUser);

export default authRouter;