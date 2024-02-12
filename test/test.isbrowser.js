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

const { expect } = require('chai');
const { isBrowser, whichVersion } = require("../index.js");

describe('[isBrowser tests] Tests to check if environment is browser or nodejs enviroment', () => {

  before(() => {
  });

  after(() => {
  });

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

  it('should be string for whichVersion() nodejs', () => {
    let actual = whichVersion();
    let expected = "string";
    expect(typeof actual).to.deep.equal(expected);
  });

  it('should be number for whichVersion() nodejs', () => {
    let actual = whichVersion();
    let expected = "number";
    expect(typeof Number(actual)).to.deep.equal(expected);
  });

  it('should be string for whichVersion(true) nodejs', () => {
    let actual = whichVersion(true);
    let expected = "string";
    expect(typeof actual).to.deep.equal(expected);
  });

  it('should be a fail for number for whichVersion(true) nodejs', () => {
    let actual = whichVersion(true);
    let expected = NaN;
    expect(typeof Number(actual)).to.equal(typeof expected);
  });

});
