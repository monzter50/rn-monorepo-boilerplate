# `@monorepo/eslint-config`

A shareable ESLint configuration for JavaScript/TypeScript projects, including support for web, Node.js, and React Native. Use this config to enforce consistent code style and best practices across your monorepo projects.

## Installation

First, install the package and its required peer dependencies:

```bash
npm install --save-dev @monorepo/eslint-config
# or
yarn add --dev @monorepo/eslint-config
```

Make sure you also have the following peer dependencies installed in your project:

- `eslint`
- `typescript`
- `@typescript-eslint/parser`
- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-native` (for React Native projects)
- `prettier`

You can install them with:

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native prettier
```

## Usage

### For Web or Node.js Projects

In your ESLint configuration file (e.g., `.eslintrc.js`):

```js
module.exports = {
  extends: ['@monorepo/eslint-config'],
};
```

### For React Native Projects

In your ESLint configuration file:

```js
module.exports = {
  extends: ['@monorepo/eslint-config/react-native'],
};
```

## Customization

You can override or add specific rules in your ESLint config:

```js
module.exports = {
  extends: ['@monorepo/eslint-config'],
  rules: {
    'no-console': 'off',
    // other custom rules
  },
};
```

## What does this config include?

- Based on `eslint:recommended` and `plugin:@typescript-eslint/recommended`.
- Integrates with Prettier for automatic code formatting.
- Rules and plugins for React and React Native.
- Ignores common folders like `node_modules`, `dist`, `build`, `coverage`, and generated config files.

## License

MIT

