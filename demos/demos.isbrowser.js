/**
 * 
 * Package: which-platform
 * Author: Ganesh B
 * Description: check if an enviromment is a nodejs or browser enviroment
 * Install: npm i which-platform --save
 * Github: https://github.com/ganeshkbhat/which-platform
 * npmjs Link: https://www.npmjs.com/package/which-platform
 * File: index.js
 * File Description: file has isBrowser function that checks if an enviromment is a nodejs or browser enviroment
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { isBrowser, nodeVersionLTS, nodeVersion, whichVersion } = require("../index.js");

console.log("isBrowser: ", isBrowser());
console.log("nodeVersion: ", nodeVersion());
console.log("nodeVersionLTS: ", nodeVersionLTS());
console.log("whichVersion: ", whichVersion());
