import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" })); //limit the form data
app.use(express.urlencoded({ limit: "20kb" })); // make the data coming from URL in a same format
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

// URL will be https://localhost:8000//api/v1/users/jo bhi aage ayega

export default app;
