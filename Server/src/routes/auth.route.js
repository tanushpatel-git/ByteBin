const {Router} =require("express"); 
const authRouter=Router(); 
const {registerUser, loginUser, logoutUser}=require("../controllers/auth.controller");

authRouter.post("/register",registerUser);
authRouter.post("/login",loginUser);
authRouter.post("/logout",logoutUser);

module.exports=authRouter;