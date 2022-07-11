import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {logger} from "./src/logger/winston"

const PORT = 3000;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(bodyParser.json());


app.get("/", (req, res, next) => {
  try {
    res.end("<h1>Hello Winston!</h1>");
    throw new Error("Error test Winstone!");
  } catch (e) {
    logger.error(e)
  }

})

app.listen(PORT, () => {
  console.log("App running on port: " + PORT)
})
