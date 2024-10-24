import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const verifyJWT = asyncHandler(async (req, _, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  const decodedToken = jwt.verify(token, process.env.ACESS_TOKEN_SECRET);

  const user = await User.findById(decodedToken._id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new ApiError(401, "Invalid Access Token");
  }

  req.user = user;
  next();
});

export default verifyJWT;
