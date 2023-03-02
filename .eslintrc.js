module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    // 'plugin:react/recommended',
    'standard-with-typescript'
    // 'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  ignorePatterns: [
    './build/**/*.js'
  ],
  rules: {
    'semi': always
  }
}
