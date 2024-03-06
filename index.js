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


// function coreJSImplementation() {
//   // /core-js/internals/global.js
//    https://www.npmjs.com/package/core-js  

//   var check = function (it) {
//     return it && it.Math === Math && it;
//   };
//   // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
//   module.exports =
//     // eslint-disable-next-line es/no-global-this -- safe
//     check(typeof globalThis == 'object' && globalThis) ||
//     check(typeof window == 'object' && window) ||
//     // eslint-disable-next-line no-restricted-globals -- safe
//     check(typeof self == 'object' && self) ||
//     check(typeof global == 'object' && global) ||
//     check(typeof this == 'object' && this) ||
//     // eslint-disable-next-line no-new-func -- fallback
//     (function () { return this; })() || Function('return this')();
// }


/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}


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

  // Check if the environment is a Service worker
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

  // Check if the environment is a Service worker
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

