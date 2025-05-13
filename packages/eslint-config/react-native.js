module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Make sure this is last to override other configs
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // For a shared config, it's often better not to rely on a specific tsconfig.json path initially.
    // project: './tsconfig.json', // Consider if all consuming projects will have this
  },
  rules: {
    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off', // Reconsider enabling this later for stricter typing

    // React Native
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-color-literals': 'warn', // If you want to enforce theme colors

    // General
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'curly': ['error', 'multi-line'],

    // Add other project-specific overrides here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
    'jest': true, // Assuming you use Jest for testing in RN projects
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "coverage/",
    "android/",
    "ios/",
    "*.generated.js",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js",
  ],
}; 