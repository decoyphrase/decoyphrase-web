# Contributing to Decoy Phrase Landing Platform

Thank you for your interest in contributing to Decoy Phrase! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branching Strategy](#branching-strategy)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Component Guidelines](#component-guidelines)

---

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- Git

### Setup

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/decoyphrase-web.git
cd decoyphrase-web

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Start development
npm run dev
```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 2. Make Changes

- Write clean, type-safe TypeScript code
- Follow existing code patterns
- Add tests when applicable
- Update documentation as needed

### 3. Run Checks

```bash
# Run all validations before committing
npm run validate
```

### 4. Commit Changes

```bash
git add .
git commit -m "feat: add donation calculator component"
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

## Branching Strategy

| Branch      | Purpose                         |
| ----------- | ------------------------------- |
| `main`      | Production-ready code           |
| `develop`   | Integration branch for features |
| `feature/*` | New features                    |
| `fix/*`     | Bug fixes                       |
| `hotfix/*`  | Critical production fixes       |
| `chore/*`   | Maintenance tasks               |

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Description                         |
| ---------- | ----------------------------------- |
| `feat`     | New feature                         |
| `fix`      | Bug fix                             |
| `docs`     | Documentation changes               |
| `style`    | Code style (formatting, semicolons) |
| `refactor` | Code refactoring                    |
| `perf`     | Performance improvements            |
| `test`     | Adding/updating tests               |
| `chore`    | Maintenance tasks                   |
| `ci`       | CI/CD changes                       |

### Examples

```bash
feat(donation): add storage calculator component
fix(api): handle rate limit errors in CoinGecko route
docs(readme): update installation instructions
refactor(hooks): simplify useCopyToClipboard logic
```

## Pull Request Process

### Before Submitting

- [ ] All checks pass (`npm run validate`)
- [ ] Code follows style guidelines
- [ ] Commits follow conventional format
- [ ] Documentation updated if needed
- [ ] No console logs or debugging code

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] New feature
- [ ] Bug fix
- [ ] Refactoring
- [ ] Documentation

## Testing

How to test these changes

## Screenshots (if applicable)

## Checklist

- [ ] I have tested my changes
- [ ] I have updated documentation
- [ ] My code follows the style guidelines
```

### Review Process

1. At least 1 approval required
2. All CI checks must pass
3. Resolve all review comments
4. Squash and merge

## Code Style Guidelines

### TypeScript

```typescript
// Use explicit types
function calculateCapacity(winston: bigint): StorageCapacity {
  // ...
}

// Prefer const assertions
export const CACHE_TTL = {
  price: 60,
  balance: 60,
} as const;

// Use type guards
function isGeneratorFeedback(data: FeedbackFormData): data is GeneratorFeedbackData {
  return data.category.startsWith('generator-');
}
```

### React Components

```typescript
// Use function components with explicit types
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ variant, onClick, children }: ButtonProps) {
  return (
    <button className={cn('btn', variant)} onClick={onClick}>
      {children}
    </button>
  );
}
```

### File Naming

| Type       | Convention                     | Example                  |
| ---------- | ------------------------------ | ------------------------ |
| Components | PascalCase                     | `DonationCalculator.tsx` |
| Hooks      | camelCase with `use` prefix    | `useCopyToClipboard.ts`  |
| Utils      | camelCase                      | `formatters.ts`          |
| Types      | camelCase with `.types` suffix | `api.types.ts`           |
| Stores     | camelCase with `.store` suffix | `ui.store.ts`            |
| Constants  | camelCase                      | `wallets.ts`             |

## Component Guidelines

### Structure

```
components/
├── ui/                     # Base components (Button, Input, Card)
├── layout/                 # Layout components (Navbar, Footer)
├── common/                 # Shared components
└── features/               # Feature-specific components
    └── donation/
        ├── DonationCalculator.tsx
        ├── WalletCard.tsx
        └── index.ts        # Barrel export
```

### Component Template

```typescript
/**
 * ComponentName
 * Brief description of what this component does
 */

'use client'; // Only if needed

import { useState } from 'react';

interface ComponentNameProps {
  /** Description of prop */
  propName: string;
}

export function ComponentName({ propName }: ComponentNameProps) {
  const [state, setState] = useState(false);

  return (
    <div>
      {/* Component content */}
    </div>
  );
}
```

### Best Practices

1. **Single Responsibility** - One component, one purpose
2. **Props Interface** - Always define explicit prop types
3. **Memoization** - Use `useMemo`/`useCallback` for expensive operations
4. **Error Boundaries** - Wrap critical components
5. **Accessibility** - Include ARIA attributes where needed

---

## Questions?

- Open an issue for bugs or feature requests
- Join our [Discord](https://discord.gg/q9cYTxtagJ) for discussions

Thank you for contributing! 🎉
