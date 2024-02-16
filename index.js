/**
 * 
 * Package: isbrowser
 * Author: Ganesh B
 * Description: check if an enviromment is a nodejs or browser enviroment
 * Install: npm i isbrowser --save
 * Github: https://github.com/ganeshkbhat/isbrowser
 * npmjs Link: https://www.npmjs.com/package/isbrowser
 * File: index.js
 * File Description: file has isBrowser function that checks if an enviromment is a nodejs or browser enviroment
 * 
*/

/* eslint no-console: 0 */

'use strict';


/**
 *
 *
 * @return {*} 
 */
function nodeVersion() {
  return process.versions.node.split('.')[0];
}

function whichVersion() {
  // Check if the environment is Node.js
  if (typeof process === "object" &&
    typeof require === "function") {
    return nodeVersion();
  }

  // Check if the environment is a
  // Service worker
  if (typeof importScripts === "function") {
    return window.navigator.userAgent;
  }

  // Check if the environment is a Browser
  if (typeof window === "object") {
    return window.navigator.userAgent;
  }
}

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


if (!isBrowser()) {
  module.exports.isBrowser = isBrowser;
  module.exports.whichVersion = whichVersion;
  module.exports.default = isBrowser;
}

