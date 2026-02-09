# E-commerce Platform - Testing & CI/CD Setup

This repository contains a full-stack e-commerce platform with comprehensive testing, linting, and CI/CD pipeline configured at the root level.

## Repository Structure

```
Ecommerce/
├── adminbucket/                 # Angular 5.2 Frontend
│   ├── src/
│   │   ├── app/                # Angular application
│   │   └── test.ts             # Test entry point
│   ├── karma.conf.js           # Karma test configuration
│   ├── package.json            # Frontend dependencies
│   └── nginx-1.4.1/           # Nginx C backend
│       ├── src/                # C source code
│       ├── package.json        # Backend test configuration
│       └── test_runner.c       # C test framework
├── .github/workflows/          # CI/CD pipelines
│   ├── ci-cd.yml              # Main pipeline
│   └── pr-validation.yml      # PR validation
├── package.json                # Root orchestration
├── coverage-merge.js           # Coverage aggregation
├── lint-all.js                 # Unified linting
└── README.md                   # This file
```

## Technology Stack

### Frontend
- **Framework**: Angular 5.2
- **Testing**: Jasmine + Karma
- **Linting**: TSLint + Prettier
- **Language**: TypeScript

### Backend
- **Server**: Nginx 1.4.1
- **Language**: C
- **Testing**: Custom C test framework
- **Linting**: Cppcheck (if available)

## Quick Start

### Prerequisites
- Node.js 16.x or 18.x
- npm or pnpm
- GCC/Make (for backend)
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Ecommerce

# Install all dependencies
npm run install:all

# Alternative: Install manually
npm install
cd adminbucket && npm install
```

## Available Commands (Run from Root)

### Testing Commands
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run frontend tests only
npm run test:frontend

# Run backend tests only
npm run test:backend
```

### Linting Commands
```bash
# Run all linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run frontend linting only
npm run lint:frontend

# Run backend linting only
npm run lint:backend
```

### Build Commands
```bash
# Build all projects
npm run build

# Build frontend only
npm run build:frontend

# Build backend only
npm run build:backend
```

### Development Commands
```bash
# Start development server
npm start

# Start with dev environment
npm run dev

# Clean all build artifacts
npm run clean
```

### CI/CD Commands
```bash
# Run CI test suite
npm run ci:test

# Run CI build
npm run ci:build
```

## Testing Framework Details

### Frontend Testing (Angular)
- **Framework**: Jasmine + Karma
- **Test Discovery**: Automatically finds `*.spec.ts` files
- **Coverage**: Istanbul with thresholds (70% minimum)
- **CI Mode**: Headless Chrome for automated runs

#### Test File Patterns Recognized:
- `*.spec.ts`
- `*.test.ts`
- Files in `test/` or `tests/` directories

### Backend Testing (C/Nginx)
- **Framework**: Custom C test runner
- **Test Discovery**: Finds `*.test.c` and `*_test.c` files
- **Coverage**: gcov (if available)
- **Build Integration**: Make-based compilation

#### Test File Patterns Recognized:
- `*.test.c`
- `*_test.c`
- Files in `test/` or `tests/` directories

## Coverage Reporting

Coverage reports are automatically aggregated from all projects:

```bash
# Generate coverage reports
npm run test:coverage

# View coverage reports
open coverage/index.html  # Frontend coverage
cat coverage/summary.json # Combined summary
```

### Coverage Thresholds
- **Statements**: 70%
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%

## CI/CD Pipeline

### GitHub Actions Workflows

#### Main Pipeline (`.github/workflows/ci-cd.yml`)
- **Triggers**: Push to main/develop, Pull Requests
- **Matrix Testing**: Node.js 16.x and 18.x
- **Steps**:
  1. Install dependencies
  2. Run linting
  3. Execute tests with coverage
  4. Upload coverage to Codecov
  5. Build projects
  6. Security scanning
  7. Deploy (staging/production)

#### PR Validation (`.github/workflows/pr-validation.yml`)
- **Triggers**: Pull Request events
- **Validations**:
  1. Code formatting
  2. Linting
  3. Tests
  4. Build verification
  5. PR size analysis

### Environment Variables
- `SNYK_TOKEN`: For security scanning (optional)
- `CODECOV_TOKEN`: For coverage upload (optional)

## Configuration Files

### Root Level Configuration
- `package.json`: Orchestration scripts
- `.eslintrc.js`: ESLint configuration
- `.prettierrc`: Code formatting rules
- `coverage-merge.js`: Coverage aggregation script
- `lint-all.js`: Unified linting runner

### Frontend Configuration
- `adminbucket/karma.conf.js`: Test runner configuration
- `adminbucket/tslint.json`: TypeScript linting rules
- `adminbucket/.angular-cli.json`: Angular CLI configuration

### Backend Configuration
- `adminbucket/nginx-1.4.1/package.json`: Backend test scripts
- `adminbucket/nginx-1.4.1/test_runner.c`: C test framework

## Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# ...

# Run tests
npm run ci:test

# Fix any issues
npm run lint:fix

# Commit changes
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

### 2. Pull Request Process
1. Create PR from feature branch to main/develop
2. CI/CD pipeline automatically runs:
   - Code formatting checks
   - Linting across all projects
   - Test suite execution
   - Build verification
   - Security scanning
3. Review and merge when all checks pass

### 3. Deployment
- **Staging**: Automatic on merge to `develop`
- **Production**: Automatic on merge to `main`

## Troubleshooting

### Common Issues

#### Frontend Tests Fail
```bash
# Clear Angular cache
cd adminbucket
rm -rf node_modules/.cache
npm install
npm run test:ci
```

#### Backend Build Fails
```bash
# Install build tools
sudo apt-get install build-essential gcc make

# Clean and rebuild
cd adminbucket/nginx-1.4.1
make clean
./configure
make
```

#### Coverage Not Generated
```bash
# Ensure test files exist
find adminbucket/src -name "*.spec.ts"
find adminbucket/nginx-1.4.1 -name "*.test.c"

# Run coverage manually
npm run test:coverage:frontend
npm run test:coverage:backend
```

### Getting Help

1. Check CI/CD logs in GitHub Actions
2. Review test output in console
3. Verify all dependencies are installed
4. Ensure test files follow naming conventions

## Contributing

1. Follow the established naming conventions for test files
2. Ensure all tests pass before submitting PRs
3. Maintain coverage thresholds
4. Follow code formatting standards
5. Update documentation as needed

## License

MIT License - see individual project licenses for details.
