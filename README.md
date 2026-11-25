
# Adil Shahzad — QA Automation Portfolio Project

## SauceDemo | Playwright + TypeScript | CI/CD

[![Playwright QA Automation](https://github.com/adil123qcx/saucedemo-playwright-qa/actions/workflows/playwright.yml/badge.svg)](https://github.com/adil123qcx/saucedemo-playwright-qa/actions/workflows/playwright.yml)

A practical QA automation portfolio project built using Playwright and TypeScript to test the public SauceDemo e-commerce practice application.

This project demonstrates hands-on experience with UI automation, functional testing, regression testing, end-to-end testing, automated reporting, Git version control, and CI/CD integration using GitHub Actions.

---

## Project Highlights

- 8 automated UI test scenarios.
- 100% pass rate in the recorded local execution.
- 100% pass rate in the first recorded GitHub Actions execution.
- Playwright with TypeScript.
- Automated Chromium browser testing.
- GitHub Actions CI/CD integration.
- Automated HTML test reporting.
- Screenshots, videos and traces configured for failure investigation.

---

## Execution Results

### Local Execution — Windows 11

**Execution Date:** 25 November 2026

| Metric | Result |
|---|---:|
| Total Test Cases | 8 |
| Passed | 8 |
| Failed | 0 |
| Flaky | 0 |
| Skipped | 0 |
| Execution Time | 14.3 seconds |
| Pass Rate | 100% |

**Status: 8/8 tests passed successfully.**

### Continuous Integration — GitHub Actions

**Workflow:** Playwright QA Automation  
**Execution Environment:** Ubuntu GitHub-hosted runner  
**Browser:** Chromium  
**Workers:** 2

| Metric | Result |
|---|---:|
| Total Test Cases | 8 |
| Passed | 8 |
| Failed | 0 |
| Test Execution Time | 4.9 seconds |
| Complete CI Job | 1 minute 25 seconds |
| Workflow Status | Success |

**Status: 8/8 tests passed in GitHub Actions.**

The CI execution was triggered by pushing the workflow to the `main` branch.

[View GitHub Actions Workflow](https://github.com/adil123qcx/saucedemo-playwright-qa/actions)

---

## Project Objectives

- Demonstrate practical Playwright automation skills.
- Build maintainable automated UI test cases.
- Validate important e-commerce user journeys.
- Practice functional and regression testing.
- Verify application behavior through assertions.
- Generate execution reports and test evidence.
- Integrate automated tests into a CI/CD pipeline.

---

## Test Coverage

The project includes eight automated test scenarios.

| Test ID | Test Scenario |
|---|---|
| TC-01 | Reject invalid login credentials with a visible error |
| TC-02 | Allow standard user to log in and view inventory |
| TC-03 | Sort products by price from low to high |
| TC-04 | Add a product and verify cart badge |
| TC-05 | Remove a product from the cart |
| TC-06 | Require checkout customer information |
| TC-07 | Complete the standard checkout journey |
| TC-08 | Verify logout returns the user to the login screen |

### Testing Types Demonstrated

- Functional Testing
- UI Testing
- Regression Testing
- Positive and Negative Testing
- Form Validation Testing
- End-to-End Testing
- Authentication Testing
- E-commerce Workflow Testing

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Playwright Test 1.65.1 | Browser automation and test execution |
| TypeScript | Automation scripting |
| Node.js 24 | JavaScript runtime |
| npm 11 | Package management |
| Chromium | Browser testing |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Actions | CI/CD automation |
| Playwright HTML Reporter | Test reporting |

---

## Project Structure

```text
Adil_Shahzad_SauceDemo_QA_Project/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── docs/
│   ├── TEST_PLAN.md
│   ├── TEST_CASES.csv
│   └── BUG_REPORT_TEMPLATE.md
│
├── tests/
│   └── saucedemo.spec.ts
│
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .gitignore
└── README.md
```

---

## Requirements

- Windows 10 or Windows 11
- Node.js
- npm
- Internet connection
- Chromium browser installed through Playwright

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/adil123qcx/saucedemo-playwright-qa.git
```

### 2. Open the project directory

```bash
cd saucedemo-playwright-qa
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Chromium

```bash
npx playwright install chromium
```

---

## Running the Tests

### Run all automated tests

```bash
npm test
```

### Generate and open the HTML report

```bash
npm run test:report
```

### Run tests with a visible browser

```bash
npm run test:headed
```

---

## GitHub Actions CI/CD

The project includes an automated GitHub Actions workflow:

`.github/workflows/playwright.yml`

The workflow runs automatically on:

- Pushes to the `main` branch.
- Pull requests targeting the `main` branch.
- Manual workflow dispatch.

### CI/CD Pipeline Steps

1. Checkout repository.
2. Set up Node.js.
3. Install npm dependencies.
4. Install Playwright Chromium and system dependencies.
5. Execute automated tests.
6. Upload Playwright test results as GitHub Actions artifacts.

### Test Evidence

The workflow uploads available files from:

- `playwright-report/`
- `test-results/`

Artifacts are retained for 14 days.

[View CI/CD Execution History](https://github.com/adil123qcx/saucedemo-playwright-qa/actions)

---

## Test Environment

**Application:** https://www.saucedemo.com/

Public demo credentials:

| Field | Value |
|---|---|
| Username | standard_user |
| Password | secret_sauce |

These are publicly provided SauceDemo practice credentials, not personal credentials.

---

## Test Reporting and Evidence

The Playwright configuration is designed to capture:

- Screenshots on test failure.
- Video recordings on test failure.
- Execution traces on test failure.
- HTML execution reports.

Test evidence should be reviewed before preparing defect reports.

A failed automated test does not automatically indicate an application defect. It may result from an automation issue, network problem, environment issue, or actual application defect.

---

## Defect Reporting Approach

Any potential defect identified during testing should be:

1. Reproduced manually.
2. Verified against expected behavior.
3. Documented with clear reproduction steps.
4. Supported by screenshots or other evidence.
5. Assigned an appropriate severity and priority.

No application defects are claimed based solely on the current successful test execution.

---

## Future Improvements

Planned enhancements:

- Expand negative test scenarios.
- Add API testing using Postman.
- Introduce cross-browser automation with Firefox and WebKit.
- Improve test data management.
- Add additional mobile and responsive UI scenarios.
- Expand CI/CD reporting and notifications.
- Add more complex e-commerce workflows.

---

## Author

**Adil Shahzad**

QA Engineer | Manual & Automation Testing | Playwright | Selenium | Cypress | API Testing

- GitHub: https://github.com/adil123qcx
- LinkedIn: https://www.linkedin.com/in/adil-shahzad-11691444/

---

## Disclaimer

This project is created for learning, professional demonstration, and QA automation portfolio purposes.

SauceDemo is a public practice application. All testing is limited to its publicly available demonstration environment.

This is an independent portfolio project and not a commercial client engagement.
