const {Router} = require("express"); 
const codeHandlerRouter = Router();
const {execute}=require("../controllers/executeCode.controller");



codeHandlerRouter.post("/execute",execute);




module.exports=codeHandlerRouter;