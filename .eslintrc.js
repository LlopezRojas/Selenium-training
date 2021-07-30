'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'strict': ['error', 'global'],
    'no-var': 'error',
    'quotes': ['error', 'single'],
    'eqeqeq': 'error',
    'spaced-comment': ['error', 'always'],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'no-extra-semi': 'error',
    'max-len': ['error', {
      'code': 120,
    }],
    indent: ['error', 2],
    'space-infix-ops': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'arrow-spacing': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true,
    }],
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 1,
    }],
  },
};