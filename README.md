# React Native Monorepo Boilerplate

A template for creating React Native applications using a monorepo structure. This boilerplate is designed to streamline the setup process for new projects and provide a consistent foundation for development.

## Purpose

This template aims to:

*   Provide a ready-to-use monorepo setup for React Native projects.
*   Simplify the initial configuration of tools like TypeScript, ESLint, Prettier, and Jest within a monorepo context.
*   Encourage best practices for code sharing and dependency management between packages (e.g., shared UI components, utilities).
*   Serve as a starting point for future React Native projects.
*   Facilitate community contributions to improve the template itself.

## Getting Started

To use this template for a new project:

1.  **Clone or Use Template:**
    *   Click the "Use this template" button on the GitHub repository page.
    *   Or clone the repository: `git clone https://github.com/your-username/rn-monorepo-boilerplate.git your-new-project-name`
    *   `cd your-new-project-name`

2.  **Install Dependencies:**
    *   Ensure you have Node.js, Yarn (or npm), and the React Native development environment set up. Follow the [official React Native environment setup guide](https://reactnative.dev/docs/environment-setup).
    *   Install root dependencies: `yarn install` (or `npm install`)

3.  **Monorepo Setup (Turborepo):**
    *   This template uses [Turborepo](https://turbo.build/repo) to manage the monorepo. The `yarn install` (or `npm install`) command in the previous step should automatically link the packages within the workspace.

4.  **Run the Application:**
    *   Navigate to the specific application package (e.g., `cd packages/mobile-app`).
    *   Run the app on your desired platform:
        *   `yarn ios` (or `npm run ios`)
        *   `yarn android` (or `npm run android`)

## Contributing

Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please follow these steps:

1.  **Fork the Repository:** Create your own fork of the project.
2.  **Create a Branch:** Make your changes in a dedicated branch: `git checkout -b feature/your-feature-name` or `bugfix/your-bug-fix`.
3.  **Commit Your Changes:** Make clear, concise commits.
4.  **Push to Your Fork:** `git push origin feature/your-feature-name`.
5.  **Open a Pull Request:** Submit a PR to the main repository's `main` branch, explaining your changes.

Please ensure your code adheres to the existing coding style and passes all linting checks and tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (Consider adding an MIT License file). 