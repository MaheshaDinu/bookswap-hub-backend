import {Request, Response} from "express";
import * as userService from "../service/user.service";

export const createUser = (req: Request, res: Response) => {
    try {
        const newUser = req.body;
        const validationError = userService.validateUser(newUser, true); // true for new user validation
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }
        const createdUser = userService.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error); // Use console.error for errors
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};

export const getAllUsers = (req: Request, res: Response) => {
    try {
        const users = userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};

export const getUserById = (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) { // Check if ID is a valid number
            return res.status(400).json({ message: "Invalid User ID." });
        }
        const user = userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};

export const updateUser = (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) {
            return res.status(400).json({ message: "Invalid User ID." });
        }
        const updatedUserData = req.body;
        const validationError = userService.validateUser(updatedUserData, false, userId); // false for update validation
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }
        const updatedUser = userService.updateUser(userId, updatedUserData);
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};

export const deleteUser = (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) {
            return res.status(400).json({ message: "Invalid User ID." });
        }
        const deletedUser = userService.deleteUser(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json({ message: "User deleted successfully.", deletedUser });
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};