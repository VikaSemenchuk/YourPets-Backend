const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const fs = require("fs/promises");

const noticesRouter = require("./routes/api/noticesRoutes");
const authRouter = require("./routes/api/authRoutes");
const petsRouter = require("./routes/api/petsRoutes");

const friendsRouter = require("./routes/api/friendsRoutes");
const newsRouter = require("./routes/api/newsRoutes");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());

app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/notices", noticesRouter);
app.use("/api/pets", petsRouter);

app.use("/api/friends", friendsRouter);
app.use("/api/news", newsRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.status(200).json({ message: "found" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
