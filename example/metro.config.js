const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

// Find the workspace root
const workspaceRoot = path.resolve(__dirname, '..');
const projectRoot = __dirname;

// Get the default configuration
const defaultConfig = getDefaultConfig(projectRoot);

// Monorepo configurations
const monorepoConfig = {
  // Watch all files within the monorepo
  watchFolders: [workspaceRoot],

  resolver: {
    // Let Metro know where to resolve packages, and in what order
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'), // Check example/node_modules first
      path.resolve(workspaceRoot, 'node_modules'), // Then check root node_modules
    ],
    // Ensure symlinks are followed correctly
    // disableHierarchicalLookup: true, // Keep this disabled unless proven necessary
  },
};

// Merge the default config with our monorepo specific settings
module.exports = mergeConfig(defaultConfig, monorepoConfig);
