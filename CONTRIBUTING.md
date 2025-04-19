# Contributing to Reachly

Thank you for your interest in contributing to Reachly! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Questions and Support](#questions-and-support)

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others.

## 🚀 Getting Started

1. **Fork the Repository**

   - Click the "Fork" button on the top right of the repository page
   - Clone your forked repository:
     ```bash
     git clone https://github.com/your-username/reachly.git
     cd reachly
     ```

2. **Set Up Development Environment**

   - Install dependencies:
     ```bash
     npm install
     # or
     yarn install
     ```
   - Start the development server:
     ```bash
     npm run dev
     # or
     yarn dev
     ```

3. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## 🔄 Development Workflow

1. **Keep Your Fork Updated**

   ```bash
   git remote add upstream https://github.com/original-owner/reachly.git
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Make Your Changes**

   - Follow the coding standards
   - Write tests for new features
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   npm run test
   # or
   yarn test
   ```

## 🔍 Pull Request Process

1. **Create a Pull Request**

   - Push your changes to your fork
   - Create a pull request to the main repository
   - Fill out the PR template with:
     - Description of changes
     - Related issues
     - Screenshots (if applicable)
     - Testing information

2. **PR Review Process**
   - Wait for maintainers to review your PR
   - Address any feedback or requested changes
   - Ensure all CI checks pass

## 📝 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow the project's ESLint configuration
- Use meaningful variable and function names
- Add appropriate type annotations
- Keep functions small and focused

### React

- Use functional components with hooks
- Follow the project's component structure
- Use proper prop types
- Implement proper error boundaries
- Follow React best practices

### Styling

- Use Tailwind CSS for styling
- Follow the project's design system
- Keep styles modular and reusable
- Use responsive design principles

## 💬 Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test related changes
- `chore`: Maintenance tasks

Example:

```
feat(auth): add Google OAuth integration

- Implement Google OAuth flow
- Add user profile creation
- Update authentication context

Closes #123
```

## 🧪 Testing Guidelines

- Write unit tests for new features
- Ensure existing tests pass
- Add integration tests for complex features
- Follow the project's testing patterns
- Maintain good test coverage

## 📚 Documentation

- Update README.md for significant changes
- Add JSDoc comments for new functions
- Document complex logic
- Keep documentation up-to-date
- Add examples where necessary

## ❓ Questions and Support

- Open an issue for questions or support
- Join our community chat (if available)
- Check existing issues and discussions
- Follow the project's communication guidelines

## 🙏 Thank You!

Thank you for taking the time to contribute to Reachly! Your contributions help make this project better for everyone.
