import {Router} from "express";

const bookRouter = Router();

bookRouter.get("/api/get-all-books", getAllBooks);
bookRouter.get("/api/get-book/:id", getBookById);
bookRouter.post("/api/create-book", createBook);
bookRouter.put("/api/update-book/:id", updateBook);
bookRouter.delete("/api/delete-book/:id", deleteBook);
bookRouter.get("/api/users/:id/books", getBooksByUserId);

export default bookRouter;
