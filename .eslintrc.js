
//import pluginJs from "@eslint/js";


// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//];

module.exports = {
  //export default {
  env: {
    browser: true,
    es6: true,
    //es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  globals: {
    'Promise': 'off',
  },
  overrides: [],
  // {
  //   'files': [
  //     'src/*.js'
  //   ],
  //   'excludedFiles':['random.js','userData.js'],
  //   'rules': { 'semi': ["error", "always"], }
  // },
  //languageOptions: { globals: globals.browser },
  //parser: '@typescript-eslint/parser',
  'parser':'espree',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // parser: "@babel/eslint-parse",
  // parserOptions: {
  //   requireConfigFile: false,
  //   babelOptions: {
  //     babelrc: false,
  //     configFile: false,
  //     // your babel options
  //     presets: ['@babel/preset-env'],
  //   },
  // },
  // plugins: ['unicorn', 'prettier', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    indent: [ 'error', 2
    ],
    //'linebreak-style': ['error', 'unix'],
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'always' ],
    'no-var': 'error',
    'no-use-before-define': 'error',
    'arrow-parens': [ 'error', 'as-needed' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'no-trailing-spaces': 'error',
    'no-tabs': 'error',
    camelcase: 'error',
    'unicorn/prefer-spread': 'warn',
    'unicorn/no-null': 'off',

    //'no-undef': 'off',
    // 'no-console': 'warn',
  },
};