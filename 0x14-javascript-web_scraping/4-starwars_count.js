#!/usr/bin/node
// A script that prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');
const URL = process.argv[2];
let counter = 0;
request(URL, (err, res, body) => {
  if (err) return console.log(err);
  const movies = JSON.parse(body).results;
  // console.log(movies);
  movies.forEach(movie => {
    movie.characters.forEach(cha => {
      cha.split('/').forEach(ele => {
        if (ele === '18') {
          counter += 1;
        }
      });
    });
  });
  console.log(counter);
});
