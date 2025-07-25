import {Router} from "express";
import {createBook, getAllBooks, getBookById} from "../controller/book.controller";

const bookRouter = Router();

bookRouter.get("/get-all-books", getAllBooks);
bookRouter.get("/get-book/:id", getBookById);
bookRouter.post("/create-book", createBook);
bookRouter.put("/update-book/:id", updateBook);
bookRouter.delete("/delete-book/:id", deleteBook);
bookRouter.get("/users/:id/books", getBooksByUserId);

export default bookRouter;
