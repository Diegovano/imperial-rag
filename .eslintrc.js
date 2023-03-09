module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsConfigRootDir: './'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'semistandard'
  ],
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  ignorePatterns: [
    "**/*.js"
  ],
};
