#!/usr/bin/node
// Write a script that computes the number of tasks completed by user id.

const request = require('request');
const url = process.argv[2];
let id = 0;
const data = {};
request(url, (err, res, body) => {
  if (err) return console.log(err);
  JSON.parse(body).forEach(el => {
    if (el.completed === true) {
      const key = String(el.userId);
      if (el.userId === id) {
        data[key]++;
      }
      if (el.userId !== id) {
        data[key] = 1;
      }
      id = el.userId;
    }
  }
  );
  console.log(data);
}
);
