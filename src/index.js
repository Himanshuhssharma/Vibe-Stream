import dotenv from "dotenv";
import dbConnect from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB CONNECTION FAILED: ", error);
  });
