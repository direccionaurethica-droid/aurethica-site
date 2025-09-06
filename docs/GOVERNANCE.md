# Repository Governance Documentation

This document describes the governance setup for the Auréthica Site repository, including branch protection, code quality checks, and review processes.

## Overview

The repository implements comprehensive governance through GitHub Actions workflows, automated checks, and code ownership requirements.

## Branch Protection

The `main` branch is protected with the following requirements:
- **Pull requests required**: All changes must be made through pull requests
- **Review required**: At least one code review is required before merging
- **Status checks required**: All CI workflows must pass before merging
- **Up-to-date branches**: Branches must be up-to-date with main before merging

## Automated Checks

### GitHub Actions Workflows

The CI workflow (`.github/workflows/ci.yml`) runs on every pull request and includes:

1. **Link Checking**: Validates external links in HTML files
2. **HTML & CSS Validation**: Checks syntax and structure
3. **API Tests**: Verifies all API endpoints are working
4. **Code Quality**: Validates JavaScript and JSON syntax

### Local Development Checks

You can run these checks locally using npm scripts:

```bash
# Run all linting checks
npm run lint

# Individual checks
npm run lint:html     # HTML validation
npm run lint:css      # CSS syntax check
npm run lint:js       # JavaScript syntax check
npm run lint:json     # JSON validation
npm run check-links   # External link validation
npm run test:api      # API endpoint tests (requires API server)
```

## Code Ownership

The `.github/CODEOWNERS` file defines code ownership:
- **Global owner**: `@direccionaurethica-droid`
- **Frontend files**: HTML, CSS, JS files
- **API files**: Backend server and data files
- **Documentation**: Markdown files
- **Configuration**: Build and deployment files

## File Structure

```
.github/
├── workflows/
│   └── ci.yml              # Main CI workflow
└── CODEOWNERS             # Code ownership definitions

scripts/
├── check-css.js           # CSS syntax validator
├── check-js.js            # JavaScript syntax validator
├── check-json.js          # JSON validator
├── check-links.js         # External link checker
└── test-api.js           # API endpoint tester

.htmlvalidate.json         # HTML validation configuration
```

## Status Checks

The following status checks must pass before merging:

1. **Check Links**: Validates external links
2. **HTML & CSS Validation**: Ensures markup validity
3. **API Tests**: Confirms API functionality
4. **Code Quality**: Validates syntax across file types

## Setup for New Contributors

1. Clone the repository
2. Install dependencies: `npm run install:all`
3. Run checks locally before committing: `npm run lint`
4. Create pull requests for all changes
5. Ensure all status checks pass

## Emergency Procedures

In case of urgent fixes:
1. Create a hotfix branch from main
2. Make minimal changes
3. Run `npm run lint` to ensure quality
4. Create PR with detailed explanation
5. Request expedited review

## Configuration Updates

To modify governance settings:
- **Workflows**: Edit `.github/workflows/ci.yml`
- **HTML validation**: Update `.htmlvalidate.json`
- **Code ownership**: Modify `.github/CODEOWNERS`
- **Check scripts**: Update files in `scripts/` directory

This governance setup ensures code quality, prevents breaking changes, and maintains a clean main branch while enabling collaborative development.