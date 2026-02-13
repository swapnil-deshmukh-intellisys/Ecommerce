# Setup Instructions

## Initial Setup

### 1. System Requirements

**For Frontend (Angular):**
- Node.js 16.x or 18.x
- npm 7.x or higher
- 4GB+ RAM recommended

**For Backend (Nginx/C):**
- GCC compiler
- Make utility
- Linux/macOS/Windows with WSL

**For CI/CD:**
- GitHub repository
- GitHub Actions enabled

### 2. Installation Steps

```bash
# Step 1: Clone repository
git clone <your-repository-url>
cd Ecommerce

# Step 2: Install Node.js dependencies
npm install

# Step 3: Install frontend dependencies
cd adminbucket
npm install
cd ..

# Step 4: Verify backend build tools
gcc --version
make --version

# Step 5: Test backend compilation
cd adminbucket/nginx-1.4.1
./configure --prefix=/tmp/nginx
make
cd ../..
```

### 3. Environment Setup

#### Development Environment
```bash
# Set up development environment variables
export NODE_ENV=development
export NG_ENV=dev

# Start development server
npm run dev
```

#### Production Environment
```bash
# Set up production environment variables
export NODE_ENV=production

# Build for production
npm run build
```

## IDE Configuration

### VS Code Extensions
```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "angular.ng-template",
    "ms-vscode.cpptools"
  ]
}
```

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## Testing Setup Verification

### 1. Frontend Tests
```bash
cd adminbucket
npm test

# Should see:
# ✓ All tests pass
# ✓ Coverage generated
```

### 2. Backend Tests
```bash
cd adminbucket/nginx-1.4.1
gcc -o test_runner test_runner.c
./test_runner

# Should see:
# === Nginx Backend Test Suite ===
# PASS: Basic assertion test
# PASS: Math operation test
# PASS: String length test
# PASS: String comparison test
```

### 3. Root-Level Tests
```bash
# From repository root
npm test
npm run lint
npm run test:coverage
```

## CI/CD Setup

### 1. GitHub Secrets
Add these secrets to your GitHub repository:

```
SNYK_TOKEN=your_snyk_token          # Optional: for security scanning
CODECOV_TOKEN=your_codecov_token    # Optional: for coverage reporting
```

### 2. Branch Protection
Configure branch protection rules:

- **Main branch**: Require PR reviews + status checks
- **Required status checks**:
  - `validate`
  - `test (16.x)`
  - `test (18.x)`
  - `security-scan`

### 3. Workflow Permissions
Ensure GitHub Actions have permissions to:
- Read repository contents
- Write checks and statuses
- Upload artifacts

## Troubleshooting Setup Issues

### Node.js Version Conflicts
```bash
# Use nvm to manage Node versions
nvm install 18
nvm use 18
npm install
```

### Permission Issues (Linux/macOS)
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### Backend Compilation Issues
```bash
# Install missing dependencies
# Ubuntu/Debian:
sudo apt-get install build-essential gcc make

# macOS:
xcode-select --install

# Windows:
# Install Visual Studio Build Tools or MinGW
```

### Angular CLI Issues
```bash
# Clear Angular cache
cd adminbucket
rm -rf .angular/
npm cache clean --force
npm install
```

## Performance Optimization

### 1. Build Performance
```bash
# Use npm ci for faster installs
npm ci

# Enable parallel builds
npm run build -- --parallel

# Use incremental compilation
cd adminbucket
ng build --watch
```

### 2. Test Performance
```bash
# Run tests in parallel
npm run test:frontend -- --parallel

# Use coverage caching
npm run test:coverage -- --cache
```

## Security Setup

### 1. Dependency Scanning
```bash
# Audit frontend dependencies
cd adminbucket
npm audit

# Fix security issues
npm audit fix
```

### 2. Code Scanning
Enable GitHub Advanced Security for:
- Code scanning
- Secret scanning
- Dependency scanning

## Monitoring and Logging

### 1. Test Monitoring
```bash
# Generate test reports
npm run test:coverage -- --reporters=junit,html

# View coverage reports
open adminbucket/coverage/index.html
```

### 2. Build Monitoring
```bash
# Monitor build performance
time npm run build

# Check build artifacts
ls -la adminbucket/dist/
```

## Rollback Procedures

### 1. Code Rollback
```bash
# Rollback to previous commit
git log --oneline
git revert <commit-hash>
git push origin main
```

### 2. Dependency Rollback
```bash
# Rollback package versions
cd adminbucket
npm install package-name@previous-version
npm audit fix
```

## Maintenance

### 1. Regular Updates
```bash
# Update dependencies monthly
npm outdated
npm update

# Check for security updates
npm audit
```

### 2. Cache Cleanup
```bash
# Clean npm cache
npm cache clean --force

# Clean Angular cache
cd adminbucket
rm -rf .angular/
rm -rf node_modules/.cache/
```

## Support

For setup issues:
1. Check this document first
2. Review GitHub Actions logs
3. Check individual project documentation
4. Create an issue with detailed error logs
