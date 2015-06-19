var stripJsonComments = require('strip-json-comments');
var fs = require('fs');

var target = fs.readFileSync(process.argv[2], {encoding: 'utf8'});
var json = fs.readFileSync('./browser.json', {encoding: 'utf8'});

var targetObj = JSON.parse(stripJsonComments(target));
var obj = JSON.parse(stripJsonComments(json));

var allKeys = Object.keys(obj.rules);

var keys = [
  'brace-style',
  'camelcase',
  'comma-spacing',
  'comma-style',
  'consistent-this',
  'eol-last',
  'func-names',
  'func-style',
  'indent',
  'key-spacing',
  'lines-around-comment',
  'linebreak-style',
  'max-nested-callbacks',
  'new-cap',
  'new-parens',
  'newline-after-var',
  'no-array-constructor',
  'no-continue',
  'no-inline-comments',
  'no-lonely-if',
  'no-mixed-spaces-and-tabs',
  'no-multiple-empty-lines',
  'no-nested-ternary',
  'no-new-object',
  'no-spaced-func',
  'no-ternary',
  'no-trailing-spaces',
  'no-underscore-dangle',
  'no-unneeded-ternary',
  'no-wrap-func',
  'object-curly-spacing',
  'one-var',
  'operator-assignment',
  'operator-linebreak',
  'padded-blocks',
  'quote-props',
  'quotes',
  'semi-spacing',
  'semi',
  'sort-vars',
  'space-after-keywords',
  'space-before-blocks',
  'space-before-function-paren',
  'space-in-brackets',
  'space-in-parens',
  'space-infix-ops',
  'space-return-throw-case',
  'space-unary-ops',
  'spaced-line-comment',
  'wrap-regex',
];

keys.forEach(function (key) {
  if (obj.rules[key] == null) {
    console.log('-', key, targetObj.rules[key]);
    console.log('');
  } else if (JSON.stringify(obj.rules[key]) !== JSON.stringify(targetObj.rules[key])) {
    console.log('-', key, targetObj.rules[key]);
    console.log('+', key, obj.rules[key]);
    console.log('');
  }
});
