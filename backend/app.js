const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRouter = require("./routing/post-routes");
const useRouter = require("./routing/user-routes");
require("dotenv").config();

const app = express();
const URI = process.env.MONGODB_URL;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", useRouter);
app.use("/posts", postRouter);

// Connections
mongoose.set("strictQuery", false);
mongoose
  .connect(URI || connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("Listening to Localhost Port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
