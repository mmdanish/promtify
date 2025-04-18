import expresss from "express";
import { registerUser, loginUser, userCredits } from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const userRouter = expresss.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);

export default userRouter;


