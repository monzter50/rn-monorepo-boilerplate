module.exports = {
  root: true,
    extends: ['@monorepo/eslint-config/react-native'],  
    parserOptions: {
      project: ['./tsconfig.json'], // Point to your project's tsconfig
  },
};
