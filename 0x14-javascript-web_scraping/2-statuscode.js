#!/usr/bin/node
// A script that display the status code of a GET request.

const request = require('request');
const URL = process.argv[2];

request(URL, (err, res, body) => {
	if (err) console.log(err);
	console.log(res.statusCode);
})
