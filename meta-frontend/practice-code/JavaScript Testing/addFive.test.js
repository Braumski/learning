/* 
This is a test file for our addFive program. If npm,node,and jest
are properly installed, you can just add a .test after your file name
but before the .js file extension.
  */

const { default: Testrunner } = require("jest-runner");

const addFive = require(`./addFive`);

test('returns the number plus 5', () => {   // Declaring a test to be performed
    expect(addFive(1)).toBe(6);
})