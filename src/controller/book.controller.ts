import { Request, Response } from "express";

export const createBook = (req:Request, res:Response) => {
    try {
        const newBook = req.body;
        const validationError = bookService.validateBook(newBook)
        if (validationError) {
            res.status(400).json({ message: validationError });
            return ;
        }
        const createdBook = bookService.createBook(newBook);
        res.status(201).json(createdBook);
    }catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

export const getAllBooks = (req:Request, res:Response) => {
    try {
        const books = bookService.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

export const getBookById = (req:Request, res:Response) => {
    try {
        const bookId = req.params.id;
        const book = bookService.getBookById(bookId);
        if (!book) {
            res.status(404).json({ message: "Book not found" });
            return;
        }
        res.status(200).json(book);
    }catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

export const updateBook = (req:Request, res:Response) => {
    try {
        const bookId = req.params.id;
        const updatedBook = req.body;
        const validationError = bookService.validateBook(updatedBook)
        if (validationError) {
            res.status(400).json({ message: validationError });
            return ;
        }
        const updated = bookService.updateBook(bookId, updatedBook);
        if (!updated) {
            res.status(404).json({ message: "Book not found" });
            return;
        }
        res.status(200).json(updated);
    }catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}
