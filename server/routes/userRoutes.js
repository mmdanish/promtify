import expresss from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const userRouter = expresss.Router();

userRouter.post("/resgister", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
