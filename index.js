const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./routes/useres");
const authRouter = require("./routes/auth");


dotenv.config();
mongoose.connect("mongodb://localhost:127.0.0.1:27017/instagram1", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
.then(() => console.log('database connection succesful......'))
.catch((err) => console.log(err));

  app.use(express.json());
  app.use(helmet());
  app.use(morgan("common"));

  app.use("/api/users", userRouter);
  app.use("/api/auth", authRouter);


  

app.listen(3000, () => {
    console.log(`server is running at port no -- 3000 `);
})