import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/Router.js";
// import custom from "./custom/custom"
import { requireAuth, checkUser, checkAdmin } from "./middleware/middleware.js";
// require("dotenv").config();

import morgan from "morgan";

const app = express();

// set template engine
app.set("view engine", "ejs");

// set middlewares
app.use(express.static("public"));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 3000;

const atlas_URI =
  "mongodb+srv://admin:QxzO1M9faDM5gFm2@cluster0.g9ahihb.mongodb.net/?retryWrites=true&w=majority";

const URI = "mongodb://127.0.0.1:27017/festivalia";

mongoose
  .connect(atlas_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
  )
  .catch((err) => console.log(err));

// Set routes
app.get("*", checkUser);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/tickets", (req, res) => {
  res.render("tickets");
});

app.get("/reservation", (req, res) => {
  res.render("reservation");
});

app.get("/404", (req, res) => {
  res.render("404");
});

app.use(authRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).redirect("/404");
});
