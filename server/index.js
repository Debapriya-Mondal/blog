const user = require("./routes/user");
const blog = require("./routes/blog");
const auth = require("./routes/auth");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

mongoose
  .connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("colud not connect to database", err.message));

app.use(express.json());
app.use(cors());
app.use("/api/user", user);
app.use("/api/blog", blog);
app.use("/api/login", auth);
app.listen(4000, () => console.log("Server is running"));
