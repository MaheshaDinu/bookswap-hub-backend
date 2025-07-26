import {Book} from "../models/book.model";
import {User} from "../models/user.model";

export const booksList: Book[] = [];


export const userList: User[] = [];
let nextUserId = 1;

export const getNextUserId = () => nextUserId++;