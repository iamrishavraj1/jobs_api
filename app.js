require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT | 3000;
const jobsRouter = require("./routes/jobsRoutes");
const authRouter = require("./routes/authRoutes");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//CONNECT DB
const conncetDB = require("./db/connectDB");

//EXPRESS JSON
app.use(express.json());

//ROUTERS
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/auth", authRouter);

//ERROR HANDLERS
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


//!SERVER IS RUNNING
const start = async () => {
  try {
    await conncetDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
