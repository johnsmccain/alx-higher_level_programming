#!/usr/bin/node
/*Write a script that prints all characters of a Star Wars movie:

	The first argument is the Movie ID - example: 3 = “Return of the Jedi”
	Display one character name by line
	You must use the Star wars API
	You must use the module request
*/
const request = require('request');
const id = process.argv[2];
if (!id) return console.log("pls pass in more arguments: ");
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request(url, (err, res, body) => {
	const characters = JSON.parse(body).characters;
	characters.forEach(character => {
		request(character, (err, res, body) => {
			console.log(JSON.parse(body).name);
		})
	})
})
