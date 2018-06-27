#!/usr/bin/env node
'use strict';

var packageJsonRead = require(require('path').resolve('./package.json'))
var helperStatus = packageJsonRead.helper.status;
const opn = require('opn');
var exec = require('child_process').exec,
  child;

function helperFunction() {

  console.log("\n");
  console.log(`Generating the styleguide.`);
  console.log(`Please wait...`);
  console.log("\n");
  
  child = exec('npm run styleguide:build',
    function () {    
        setTimeout(function () {
          opn('styleguide/build/atoms.html');
          console.log(`And we are done!`);
          console.log("\n");
          console.log(`In order to update the existing styleguide, please run "npm styleguide:build" and refresh the page!`);
        }, 5000)
    });
  };

if (helperStatus === "active") {
  helperFunction();
}