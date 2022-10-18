#!/usr/bin/node
// A script that prints all characters of a Star Wars movie

const request = require('request');
const id = process.argv[2];
if (!id) return console.log("try this: ./101-starwars_characters.js 3")
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request(url, (err, res, body) => {
	const characters = JSON.parse(body).characters;
	//console.log(characters[1].split("/"))
	characters.forEach(ch => {
		request(ch, (err, res, body) => {
			console.log(JSON.parse(body).name)
		})
	})
})
