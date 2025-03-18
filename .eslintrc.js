
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  globals: {
    //'Promise': 'off',
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  // 'parser':'espree',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['eslintrc.js', 'prettier.config.js'],
  plugins: ['unicorn','react', '@typescript-eslint', 'prettier'], //'prettier'
  rules:{
    'unicorn/no-array-callback-reference':'off',
    'unicorn/no-array-method-this-argument':'off',
    'Missing semicolon.':'off',
    'react/no-unknown-property':'off',
    'arrow-parens':'off',
    'unicorn/prevent-abbreviations':'off',
    'unicorn/no-null':'off',
    'no-obj-calls':'off',
    'arrow-parens':'off',
    'no-unreachable':'off',
    'react/react-in-jsx-scope':'off',
    'unicorn/no-new-array':'off',
    'no-unused-vars':'off',
    'no-dupe-keys':'off',
    'unicorn/consistent-function-scoping':'off',
    'arrow-parens':'off',
    'react/jsx-key':'off',
    'react/jsx-no-undef':'off',
    'quotes':'off',
    '@typescript-eslint/no-require-imports':'off',
    '@typescript-eslint/no-unused-vars':'off',
    'unicorn/prefer-module': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    //'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    //indent: ['error', 2],
    //'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-var': 'error',
    // 'no-use-before-define': 'error',
    //'arrow-parens': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    //'array-bracket-spacing': [ 'error', 'always' ],
    //'no-trailing-spaces': 'error',
    //'no-tabs': 'error',
    //camelcase: 'error',
    // 'unicorn/prefer-spread': 'warn',
    // 'unicorn/no-null': 'off',
    'unicorn/no-empty-file':'off',
    'unicorn/filename-case':'off',
    'no-undef': 'off',
    // 'no-console': 'warn',
  },
};
