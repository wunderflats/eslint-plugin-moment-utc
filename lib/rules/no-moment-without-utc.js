/**
 * @fileoverview Do not use moment(), use moment().utc()
 * @author Danny Arnold
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    // variables should be defined here

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
      'CallExpression': function (node) {
        if (node.callee.name === 'moment') {
          context.report(node, 'Unexpected `moment()`, use `moment.utc()`.')
        }
      }
    };

};

module.exports.schema = [
    // fill in your schema
];
