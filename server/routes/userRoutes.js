import expresss from "express";
import { registerUser, loginUser, userCredits } from "../controllers/userController.js";
import userAuth from "../middlewares/auth.js";

const userRouter = expresss.Router();

userRouter.post("/resgister", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/credits", userAuth, userCredits);

export default userRouter;


// http://localhost:4000/api/user/register
// http://localhost:4000/api/user/login