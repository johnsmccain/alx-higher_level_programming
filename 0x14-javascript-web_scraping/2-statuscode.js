#!/usr/bin/node
// A script display the status code of a GET request

const request = require('request');
const URL = process.argv[2];

request(URL, (err, res, body) => {
	console.log("code: ", res.statusCode);
})
