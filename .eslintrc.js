module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    baseURL: 'readonly',
    zrender: 'readonly'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'operator-linebreak': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
