/**
 * 
 */
const path = require('path');
const fs = require('fs');

const jsonPath1 = path.join(__dirname, '../data', 'artists.json');
const jsonData1 = fs.readFileSync(jsonPath1, 'utf8');
const artists = JSON.parse(jsonData1);
const jsonPath2 = path.join(__dirname, '../data', 'galleries.json');
const jsonData2 = fs.readFileSync(jsonPath2, 'utf8');
const galleries = JSON.parse(jsonData2);
const jsonPath3 = path.join(__dirname, '../data', 'paintings-nested.json');
const jsonData3 = fs.readFileSync(jsonPath3, 'utf8');
const paintings = JSON.parse(jsonData3);

module.exports = {artists, galleries, paintings};