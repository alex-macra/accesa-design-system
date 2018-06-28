#!/usr/bin/env node
'use strict';

var packageJsonRead = require(require('path').resolve('./package.json'))
var helperStatus = packageJsonRead.helper.status;
var inquirer = require('inquirer');
const opn = require('opn');
var exec = require('child_process').exec,
  child;

function helperFunction() {

  console.log("\n");
  //console.log(`\u001b[96m\u001b[1mThank for installing ${packageJsonRead.name} version ${packageJsonRead.version}!\u001b[96m\u001b[1m`);
  console.log(`Thank for installing ${packageJsonRead.name} version ${packageJsonRead.version}!`);
  console.log("\n");
  console.log(`                                                                                                                              
    ##    ####   ####  ######  ####    ##      #####  ######  ####  #  ####  #    #     ####  #   #  ####  ##### ###### #    # 
   #  #  #    # #    # #      #       #  #     #    # #      #      # #    # ##   #    #       # #  #        #   #      ##  ## 
  #    # #      #      #####   ####  #    #    #    # #####   ####  # #      # #  #     ####    #    ####    #   #####  # ## # 
  ###### #      #      #           # ######    #    # #           # # #  ### #  # #         #   #        #   #   #      #    # 
  #    # #    # #    # #      #    # #    #    #    # #      #    # # #    # #   ##    #    #   #   #    #   #   #      #    # 
  #    #  ####   ####  ######  ####  #    #    #####  ######  ####  #  ####  #    #     ####    #    ####    #   ###### #    #`);
  console.log("\n\n");

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
        console.log(`Downloading the design files...`);

        child = exec('git clone https://github.com/alex-macra/design',
          function (error, stderr) {
            if (error === null) {
              console.log(`Design files were downloaded with success.`);
              console.log("\n");

              if (answers.yes === true) {
                console.log(`Please wait for the react starter to install...`);
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
          console.log(`Downloading react starter pack...`);
        }

        child = exec('cd .. && git clone https://github.com/alex-macra/react',
          function (error, stderr) {
            if (error === null) {
              console.log(`React starter pack has been downloaded with success.`);
              console.log(`Next step, Installing the react dependencies. This can take a while on a slow speed internet.`);

              if (answers.design === false) {
                console.log(`Please wait...`);
              }
              console.log("\n");
            }

            exec('cd react && npm install',
              function (error, stderr) {
                if (error == null) {
                  console.log(`React starter pack was installed with success.`);
                }

                inquirer
                  .prompt(startServerQuestion)
                  .then(function (answers) {

                    if (answers.yes === true) {
                      if (error == null) {
                        console.log(`Starting up the local server...`);
                      }

                      exec('cd react && npm run start',
                        function (error, stderr) {
                          if (error !== null) {
                            console.log('exec error: ' + error);
                          }
                        });

                      if (error == null) {
                        console.log(`Please wait a couple of seconds...`);
                        setTimeout(function () {
                          opn('http://localhost:8888/');
                          console.log(`And we are done!`);
                        }, 8000);
                      }

                    }
                    if (answers.yes === false) {
                      console.log(`That's it. Happy coding!`);
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
        console.log(`That's it. Happy coding!`);
      }
    })
}

if (helperStatus === "active") {
  helperFunction();
}