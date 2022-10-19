#!/usr/bin/node
// Write a script that prints all characters of a Star Wars movi by You must use the module request
const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request(url, (err, res, body) => {
  if (err) return console.log(err);
  const characters = JSON.parse(body).characters;
  characters.forEach(character => {
    request(character, (err, res, body) => {
      if (err) return console.log(err);
      console.log(JSON.parse(body).name);
    });
  });
});
