const Router = require("express");
const all = require("../controllers/user-controllers");

const useRouter = Router();

useRouter.get("/", all.getAllUsers);
useRouter.post("/signup", all.signup);
useRouter.post("/login", all.login);


module.exports = useRouter;
