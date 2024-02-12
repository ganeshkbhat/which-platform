/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { isBrowser, whichVersion } = require("../index.js");
console.log(isBrowser());
console.log(whichVersion(), typeof whichVersion(), Number(whichVersion()));
console.log(whichVersion(), typeof whichVersion(true), Number(whichVersion(true)));
