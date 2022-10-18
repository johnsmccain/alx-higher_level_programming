#!/usr/bin/node
// A script that prints the title of a Star Wars movie where the episode number matches a given integer.

const request =  require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request(url, (err, res, body) => {
	// Parse json data to  javascript object
	const data = JSON.parse(body);
	console.log(data.title);
})
