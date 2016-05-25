/**
 * @fileoverview Do not use moment(), use moment().utc()
 * @author Danny Arnold
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-moment-without-utc'),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-moment-without-utc", rule, {

    valid: [
      'moment.utc()',
      "moment.utc('2016-05-29')"
    ],

    invalid: [
        {
            code: 'moment()',
            errors: [{
                message: 'Unexpected `moment()`, use `moment.utc()`.',
                type: 'CallExpression'
            }]
        }, {
            code: 'moment(2016-05-29)',
            errors: [{
                message: 'Unexpected `moment()`, use `moment.utc()`.',
                type: 'CallExpression'
            }]
        }
    ]
});
