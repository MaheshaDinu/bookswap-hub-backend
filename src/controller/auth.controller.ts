import {Request, Response} from "express";

export const authenticateUser = (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        const authtoken = authService.authenticateUser(username, password);
        if(!authtoken) {
            res.status(401).json({message: "Invalid credentials"});
            return;
        }
        res.status(200).json({authtoken});
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}