import express from 'express';
import bookRoutes from "./routes/book.routes";

const app = express();

//middleware

app.use(express.json());

//routes
app.use("/api/books", bookRoutes);

export default app;