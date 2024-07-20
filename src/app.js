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

/*
env for github
PORT=9000
MONGODB_URL=mongodb+srv://himanshu:Him%4022112001@cluster0.e8ev2p4.mongodb.net
CORS_ORIGIN=*
ACESS_TOKEN_SECRET=You-CAN-Write-any-thing-Here_BUT-reCommEnDED_is-to-useGeneratED_TOKeN
ACESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=You-caN_WRite-ANYthINg_here_AlSo
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=del26rnuj
CLOUDINARY_API_KEY=173346169481458
CLOUDINARY_API_SECRET=YDE8LIDsbfrGqEkc9Nx4Es_hpSM
*/
