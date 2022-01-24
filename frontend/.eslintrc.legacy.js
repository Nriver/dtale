module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    Promise: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'babel/no-invalid-this': 'error',
    'block-scoped-var': 'error',
    camelcase: ['error', { properties: 'never' }],
    complexity: 'error',
    'consistent-this': ['error', 'me'],
    'consistent-return': 'error',
    curly: 'error',
    'dot-notation': 'error',
    'max-len': ['error', { code: 120 }],
    'max-lines': ['error', 300],
    'max-params': ['error', 8],
    'max-statements': ['error', 25],
    'max-statements-per-line': ['error', { max: 2 }],
    'new-cap': 'error',
    'no-alert': 'error',
    'no-console': ['error', { allow: ['error'] }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extra-label': 'error',
    'no-extra-bind': 'error',
    'no-extend-native': 'error',
    'no-fallthrough': 'error',
    'no-invalid-this': 'off',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'off',
    'no-negated-condition': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    'no-useless-computed-key': 'error',
    'no-useless-escape': 'error',
    'no-use-before-define': 'error',
    'no-unreachable': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'promise/catch-or-return': 'error',
    'react/no-unused-prop-types': 'error',
    'react/jsx-key': 'error',
    strict: 'error',
  },
  plugins: ['promise', 'react', 'prettier', 'flowtype', 'babel'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'plugin:flowtype/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};