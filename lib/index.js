/**
 * @fileoverview Style Guide used ad CardCash
 * @author Alex Sanchez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");


module.exports.parserOptions = {
  "ecmaVersion": "2017"
};


module.exports.env = {
  "es6": true
};

// import processors
module.exports.processors = {

    // add your processors here
};
