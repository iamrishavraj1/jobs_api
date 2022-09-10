require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT | 3000;
const jobsRouter = require("./routes/jobsRoutes");

app.use(express.json());

app.use("/api/v1/jobs", jobsRouter);

app.listen(port, () => console.log("server listening"));
