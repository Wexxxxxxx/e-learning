const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const connectDB = require("./src/config/DB");
const words = require("./src/routes/Words")
const infoRoutes = require("./src/routes/info");
dotenv.config();

connectDB();

const app = express();

// Middleware

app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
});

app.use(express.json());

app.use(cors());

// Routes
app.get("/api/words", words)
app.use("/api/info", infoRoutes);


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Web-based E-laerning System",

    usage: ["GET /api/projects to look at my information"],
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
