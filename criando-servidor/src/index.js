import { config } from "dotenv";
import cors from 'cors'
import express from "express";

config();

const api = express();
const { PORT } = process.env;

api.use(cors());

api.get("/", (req, res) => {
  res.send("API's Home")
});

api.get("/front-end", (req, res) => {
  res.json({title: "FrontEnd Feliz", hours: 10})
})

api.listen(PORT, () => {
  console.log(`Server on: http://localhost:${PORT}`);
  console.log('Shutdown: ctrl + c')
});