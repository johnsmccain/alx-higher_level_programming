#!/usr/bin/node
/* a script to prints the title of a Star Wars movie where
 * the episode number matches a given integer.
 */
const request = require('request');
const URL = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(URL, (err, res, body) => {
  if (err) return console.log(err);
  console.log(JSON.parse(body).title);
});
