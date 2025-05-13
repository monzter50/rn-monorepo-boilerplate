// packages/eslint-config/index.js
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Ensures Prettier rules are last
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable if you use JSX in non-React Native web projects
    },
  },
  env: {
    browser: true, // For web projects
    node: true,
    es2020: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    // Add any other general web/node rules here
  },
  settings: {
    react: { // Add this if your default web config might use React
      version: 'detect',
    },
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "coverage/",
    "*.generated.js",
    ".turbo/",
    "babel.config.js", // Common JS config files
    "metro.config.js",
    "jest.config.js",
    "postcss.config.js",
    "tailwind.config.js",
  ],
}; 