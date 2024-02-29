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

const { expect } = require('chai');
const { isBrowser, whichVersion } = require("../index.js");

describe('[isBrowser tests] Tests to check if environment is browser or nodejs enviroment', () => {

  before(() => { });
  after(() => { });

  it('should be negative for nodejs', () => {
    let actual = isBrowser();
    let expected = false;
    expect(actual).to.deep.equal(expected);
  });

  it('should be negative for nodejs indirectly citing this is a nodejs', () => {
    let actual = isBrowser();
    let expected = false;
    expect(actual).to.deep.equal(expected);
  });

  it('should be negative for browser after creating a mock or fake window object in nodejs', () => {
    const window = {};
    let actual = isBrowser();
    let expected = false;
    expect(actual).to.deep.equal(expected);
  });

  it('should be negative for browser after creating a mock or fake importScripts function in nodejs', () => {
    const importScripts = () => { }
    let actual = isBrowser();
    let expected = false;
    expect(actual).to.deep.equal(expected);
  });

  it('should be negative for browser after creating a mock or fake window object or importScripts function in nodejs', () => {
    const window = {};
    const importScripts = () => { }
    let actual = isBrowser();
    let expected = false;
    expect(actual).to.deep.equal(expected);
  });

});


describe('[isBrowser tests] Tests to check whichVersion in browser and nodejs enviroment', () => {

  before(() => {
  });

  after(() => {
  });

  it('should be negative for nodejs', () => {
    let actual = whichVersion();
    let expected = true;
    expect(typeof Number(actual) === "number").to.deep.equal(expected);
  });

});
