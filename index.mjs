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

import { default as checks } from "./index";

export const isBrowser = checks.isBrowser
export default isBrowser;
