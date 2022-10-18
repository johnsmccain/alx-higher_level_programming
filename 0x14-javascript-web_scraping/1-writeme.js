#!/usr/bin/node
// A script that write a string to a file.

const fs = require('fs');
const [_, _1, file, text] = process.argv;

fs.writeFile(file, text, 'utf-8', (err) => {
	if (err) console.log(err);
});
