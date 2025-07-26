import {User} from "../models/user.model";
import {getNextUserId, userList} from "../db/db";

export const createUser = (newUser: Omit<User, "id" | "createdAt" | "updatedAt">) =>
{
    try {
        const user: User = {
            id: getNextUserId(),
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            location: newUser.location,
            contact: newUser.contact,
            isAdmin: newUser.isAdmin,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        userList.push(user)
        const { password, ...userWithoutPassword } = user; // Exclude password from the returned object for security
        return userWithoutPassword as User;
    }catch (error) {
        if (error instanceof Error) {
            console.log(error)
            throw new Error(error.message);
        }else {
            throw new Error("An unknown error occurred");
        }
    }
}

