import express from 'express';
import bookRoutes from "./routes/book.routes";
import userRoutes from "./routes/user.routes";

const app = express();

//middleware

app.use(express.json());

//routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

export default app;