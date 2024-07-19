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

export default app;
