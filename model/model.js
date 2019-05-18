import db from "../db/db";
const helper = require("../helper/helper.js");

function findData(req) {
  return new Promise((resolve, reject) => {
    //get time series data by ID
    if (typeof req.query.id !== "undefined") {
      var id = parseInt(req.query.id, 10);

      db.map(data => {
        if (data.id === id && helper.filterByDate(data.date, req)) {
          resolve(data);
        }
      });
      reject({
        message: "No data found",
        status: 404
      });
    }

    //get time series data by tag
    if (typeof req.query.tag !== "undefined") {
      var tag =req.query.tag.toString();
      db.map(data => {
        if (data.tag === tag && helper.filterByDate(data.date, req)) {
          resolve(data);
        }
      });
      reject({
        message: "No data found",
        status: 404
      });
    }
  });
}

function getData(req) {
  return new Promise((resolve, reject) => {
    findData(req)
      .then(post => resolve(post))
      .catch(err => reject(err));
  });
}

module.exports = {
  getData
};
