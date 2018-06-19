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
    name: 'design',
    message: 'Would you like download the base design files?',
    default: true
  },
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

    if (answers.design === true) {
      console.log("\n");
      console.log(`\u001b[96m\u001b[1mDownloading the design files...\u001b[96m\u001b[1m`);

      child = exec('git clone https://github.com/alex-macra/design',
        function (error, stderr) {
          if (error === null) {
            console.log(`\u001b[96m\u001b[1mDesign files were downloaded with success.\u001b[96m\u001b[1m`);
            console.log("\n");

            if (answers.yes === true) {
              console.log(`\u001b[96m\u001b[1mPlease wait for the react starter to install...\u001b[96m\u001b[1m`);
            }
          }

          if (error !== null) {
            console.log('exec error: ' + error);
          }
        });
    }

    if (answers.yes === true) {
      if (answers.design === false) {
        console.log("\n");
        console.log(`\u001b[96m\u001b[1mDownloading react starter pack...\u001b[96m\u001b[1m`);
      }

      child = exec('git clone https://github.com/alex-macra/react-start',
        function (error, stderr) {
          if (error === null) {
            console.log(`\u001b[96m\u001b[1mReact starter pack has been downloaded with success.\u001b[96m\u001b[1m`);
            console.log(`\u001b[96m\u001b[1mNext step, Installing the react dependencies. This can take a while on a slow speed internet.\u001b[96m\u001b[1m`);
            console.log(`\u001b[96m\u001b[1mPlease wait...\u001b[96m\u001b[1m`);
            console.log("\n");
          }

          exec('cd react-start && npm install',
            function (error, stderr) {
              if (error == null) {
                console.log(`\u001b[96m\u001b[1mReact starter pack was installed with success.\u001b[96m\u001b[1m`);
              }

              inquirer
                .prompt(startServerQuestion)
                .then(function (answers) {

                  if (answers.yes === true) {
                    if (error == null) {
                      console.log(`\u001b[96m\u001b[1mStarting up the local server...\u001b[96m\u001b[1m`);
                    }

                    exec('cd react-start && npm run start',
                      function (error, stderr) {
                        if (error !== null) {
                          console.log('exec error: ' + error);
                        }
                      });

                    if (error == null) {
                      console.log(`\u001b[96m\u001b[1mPlease wait a couple of seconds...\u001b[96m\u001b[1m`);
                      setTimeout(function () {
                        opn('http://localhost:8888/');
                        console.log(`\u001b[96m\u001b[1mAnd we are done!\u001b[96m\u001b[1m`);
                      }, 8000);
                    }

                  }
                  if (answers.yes === false) {
                    console.log(`\u001b[96m\u001b[1mThat's it. Happy coding!\u001b[96m\u001b[1m`);
                  }
                })

              if (error !== null) {
                console.log('exec error: ' + error);
              }
            });

          if (error !== null) {
            console.log('exec error: ' + error);
          }
        });
    }
    if (answers.yes === false) {
      console.log(`\u001b[96m\u001b[1mThat's it. Happy coding!\u001b[96m\u001b[1m`);
    }
  })