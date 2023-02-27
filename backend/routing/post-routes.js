const Router = require("express");
const all = require("../controllers/post-controller");

const postRouter = Router();

postRouter.get("/", all.getAllPosts);
postRouter.get("/:id", all.getPostById);
postRouter.post("/", all.addPost);
postRouter.put("/:id", all.updatePost);
postRouter.delete("/:id", all.deletePost);

module.exports = postRouter;
