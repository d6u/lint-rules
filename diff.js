var stripJsonComments = require('strip-json-comments');
var fs = require('fs');

var target = fs.readFileSync(process.argv[2], {encoding: 'utf8'});
var json = fs.readFileSync('./browser.json', {encoding: 'utf8'});

var targetObj = JSON.parse(stripJsonComments(target));
var obj = JSON.parse(stripJsonComments(json));

var allKeys = Object.keys(obj.rules);

var keys = [
  'comma-dangle',
  'no-cond-assign',
  'no-console',
  'no-constant-condition',
  'no-control-regex',
  'no-debugger',
  'no-dupe-args',
  'no-dupe-keys',
  'no-duplicate-case',
  'no-empty-character-class',
  'no-empty',
  'no-ex-assign',
  'no-extra-boolean-cast',
  'no-extra-parens',
  'no-extra-semi',
  'no-func-assign',
  'no-inner-declarations',
  'no-invalid-regexp',
  'no-irregular-whitespace',
  'no-negated-in-lhs',
  'no-obj-calls',
  'no-regex-spaces',
  'no-reserved-keys',
  'no-sparse-arrays',
  'no-unreachable',
  'use-isnan',
  'valid-jsdoc',
  'valid-typeof',
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
