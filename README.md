# playwright-automation-framework
Scalable Playwright automation framework for end-to-end and API testing, built with best practices, CI/CD integration, and maintainable design patterns.

# Playwright Automation Framework

## Overview
Production-ready test automation framework built with Playwright for end-to-end UI and API testing.  
Designed with scalability, maintainability, and CI/CD integration in mind, following industry best practices.

---

## Tech Stack
- Playwright
- Javascript
- Node.js
- Playwright Test Runner
- HTML / Allure Reporting
- GitHub Actions (CI)

---

## Project Structure

├── tests
│ ├── ui # End-to-end UI tests
│ ├── api # REST API tests
│ └── fixtures # Test fixtures and hooks
├── pages # Page Object Model (POM)
├── utils # Reusable helpers and utilities
├── config # Environment and test configuration
├── playwright.config.ts
├── package.json
└── README.md


The framework follows the **Page Object Model (POM)** to improve test readability, reuse, and long-term maintainability.

---

## Test Coverage
- End-to-end UI tests
- REST API tests (CRUD operations, status code validation, response validation)
- Cross-browser testing (Chromium, Firefox, WebKit)
- Environment-based execution

---

## Prerequisites
- Node.js (v18 or higher)
- npm

---

## Setup & Installation
```bash
git clone https://github.com/your-username/playwright-automation-framework.git
cd playwright-automation-framework
npm install
npx playwright install
```
## running tests

Run all tests:

```
npx playwright test
```

Run UI tests only:

```
npx playwright test tests/ui
```

Run API tests only:
```
npx playwright test tests/api
```

Run tests in headed mode:
```
npx playwright test --headed
```

## Reporting 

After execution, an HTML report is generated automatically.

To view the report:
```
npx playwright show-report
```
