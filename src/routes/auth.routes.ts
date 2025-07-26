import {Router} from "express";

const authRouter = Router();

authRouter.post("/login", authenticateUser);

export default authRouter;