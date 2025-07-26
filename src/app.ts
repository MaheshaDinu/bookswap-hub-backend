import express from 'express';
import bookRoutes from "./routes/book.routes";
import userRoutes from "./routes/user.routes";
import exchangeRequestRoutes from "./routes/exchangeRequest.routes";

const app = express();

//middleware

app.use(express.json());

//routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("api/exchange-requests", exchangeRequestRoutes)

export default app;