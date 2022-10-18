#!/usr/bin/node
// A script that gets the contents of a webpage and stores it in a file.

const fs = require('fs');
const request = require('request');
const [_, _1, url, file] = process.argv;

request(url, (err, res, body) => {
  fs.writeFile(file, body, 'utf-8', (err) => {
    if (err) console.log(err);
  });
});
