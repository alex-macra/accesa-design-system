#!/usr/bin/env node
'use strict';

var pkg = require(require('path').resolve('./package.json'));
var inquirer = require('inquirer');
const opn = require('opn');
var exec = require('child_process').exec,
  child;

if (pkg.collective) {
  console.log("\n");
  console.log(`\u001b[96m\u001b[1mThank for installing ${pkg.name}!\u001b[96m\u001b[1m`);
  console.log("\n");
  console.log(`                                                                                                                              
  ##    ####   ####  ######  ####    ##      #####  ######  ####  #  ####  #    #     ####  #   #  ####  ##### ###### #    # 
 #  #  #    # #    # #      #       #  #     #    # #      #      # #    # ##   #    #       # #  #        #   #      ##  ## 
#    # #      #      #####   ####  #    #    #    # #####   ####  # #      # #  #     ####    #    ####    #   #####  # ## # 
###### #      #      #           # ######    #    # #           # # #  ### #  # #         #   #        #   #   #      #    # 
#    # #    # #    # #      #    # #    #    #    # #      #    # # #    # #   ##    #    #   #   #    #   #   #      #    # 
#    #  ####   ####  ######  ####  #    #    #####  ######  ####  #  ####  #    #     ####    #    ####    #   ###### #    #`);
  console.log("\n\n");
}

const getReactQuestion = [
  {
    type: 'confirm',
    name: 'yes',
    message: 'Would you like to automatically integrate react (takes a few moments)?',
    default: true
  }
];

const startServerQuestion = [
  {
    type: 'confirm',
    name: 'yes',
    message: 'Would you like to start a local server and open the project right away?',
    default: true
  }
];

inquirer
  .prompt(getReactQuestion)
  .then(function (answers) {

    if (answers.yes = true) {
      console.log("\n\n");
      console.log(`\u001b[96m\u001b[1mDownloading react starter package.\u001b[96m\u001b[1m`);
      console.log(`\u001b[96m\u001b[1mPlease wait...\u001b[96m\u001b[1m`);
      console.log("\n");
      child = exec('git clone https://github.com/alexandrumacra/react-start',
        function (error, stderr) {
          console.log("\n");
          console.log(`\u001b[96m\u001b[1mReact starter pack was downloaded with success.\u001b[96m\u001b[1m`);
          console.log(`\u001b[96m\u001b[1mNext step, installing the package.\u001b[96m\u001b[1m`);
          console.log(`\u001b[96m\u001b[1mInstalling...\u001b[96m\u001b[1m`);
          console.log("\n");

          console.log(stderr);
          exec('cd react-start && npm install',
            function (error) {

              console.log(`\u001b[96m\u001b[1mReact starter pack was installed with success.\u001b[96m\u001b[1m`);
              console.log("\n");

              inquirer
                .prompt(startServerQuestion)
                .then(function (answers) {

                  if (answers.yes = true) {
                    exec('cd react-start && npm run start',
                      function (error) {
                        console.log("\n");
                        console.log(`\u001b[96m\u001b[1mStarting local server.\u001b[96m\u001b[1m`);
                        console.log(`\u001b[96m\u001b[1mPlease wait...\u001b[96m\u001b[1m`);
                        console.log("\n");

                        opn('http://localhost:8888/');
                        console.log("\n");                  

                        if (error !== null) {
                          console.log('exec error: ' + error);
                        }
                      });

                  }
                });

              if (error !== null) {
                console.log('exec error: ' + error);
              }
            });

          if (error !== null) {
            console.log('exec error: ' + error);
          }
        });
    }
  })