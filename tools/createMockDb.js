/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const mockData = require('./mockData');

const { users, products } = mockData;
const data= JSON.stringify({users, products});
const filepath = path.join(__dirname, 'db.json');

console.log("what is the file path", filepath)

fs.writeFile(filepath, data, function(err) {
    err ? console.log(err) : console.log("Mock DB created.");
})