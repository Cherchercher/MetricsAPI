import express from "express";
import db from "./db/db";
const helper = require("./helper/helper");
const model = require("./model/model");
const app = express();

app.get("/data", helper.checkType, async (req, res) => {
  await model
    .getData(req)
    .then(post => res.json(post))
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
