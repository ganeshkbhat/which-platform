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

function isBrowser() {
  // Check if the environment is Node.js
  if (typeof process === "object" &&
    typeof require === "function") {
    return false;
  }

  // Check if the environment is a
  // Service worker
  if (typeof importScripts === "function") {
    return false;
  }

  // Check if the environment is a Browser
  if (typeof window === "object") {
    return true;
  }
}

module.exports.isBrowser = isBrowser;
module.exports.default = isBrowser;
