const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
var multer = require("multer");
var upload = multer();

// parsing json post data
app.use(express.json());

// parsing url encoded data
app.use(
  express.urlencoded({
    extended: false,
  })
);

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

// DB Connection
require("./configs/connection");

// routing import list
const commentRouter = require("./routes/commentRouter");
const userRouter = require("./routes/userRouter");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/comments", commentRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
});
