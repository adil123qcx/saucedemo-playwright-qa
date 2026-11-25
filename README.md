
# Adil Shahzad — QA Automation Portfolio Project

## SauceDemo | Playwright + TypeScript

A practical QA automation demonstration project built using Playwright and TypeScript to test the public SauceDemo e-commerce practice application.

This project demonstrates UI automation, functional testing, regression testing, test validation, and end-to-end checkout workflows.

---

## Execution Results

**Execution Date:** 25 November 2026  
**Operating System:** Windows 11  
**Automation Framework:** Playwright  
**Programming Language:** TypeScript  
**Browser:** Chromium  

| Metric | Result |
|---|---:|
| Total Test Cases | 8 |
| Passed | 8 |
| Failed | 0 |
| Flaky | 0 |
| Skipped | 0 |
| Execution Time | 14.3 seconds |
| Pass Rate | 100% |

**Execution Status: 8/8 test cases passed successfully.**

These results are based on the local execution shown in the Playwright HTML report.

This is an independent portfolio demonstration using a public practice application. It is not a client project or production application.

---

## Project Objectives

- Demonstrate practical Playwright automation skills.
- Build maintainable automated UI test cases.
- Validate important e-commerce user journeys.
- Practice functional and regression testing.
- Verify application behavior through assertions.
- Generate execution reports and test evidence.

---

## Test Coverage

The project currently includes eight automated test scenarios:

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

- Playwright
- TypeScript
- Node.js
- npm
- Chromium
- Playwright HTML Reporter

---

## Project Structure

```text
Adil_Shahzad_SauceDemo_QA_Project/
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
git clone YOUR_GITHUB_REPOSITORY_URL
```

Alternatively, download and extract the project ZIP.

### 2. Open the project directory

```bash
cd Adil_Shahzad_SauceDemo_QA_Project
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

## Test Environment

Application: https://www.saucedemo.com/

Public demo credentials:

| Field | Value |
|---|---|
| Username | standard_user |
| Password | secret_sauce |

These are publicly provided SauceDemo practice credentials, not personal credentials.

---

## Test Reporting and Evidence

The Playwright configuration is designed to capture:

- Screenshots on test failure
- Video recordings on test failure
- Execution traces on test failure
- HTML execution reports

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

- Add more negative test scenarios.
- Expand checkout validation coverage.
- Add API testing using Postman.
- Integrate automated tests with GitHub Actions.
- Add cross-browser execution.
- Improve test data management.
- Add additional mobile and responsive UI scenarios.

---

## Author

**Adil Shahzad**

QA Engineer | Manual & Automation Testing | Playwright | Selenium | Cypress | API Testing

- GitHub: https://github.com/adil123qcx
- LinkedIn: https://www.linkedin.com/in/adil-shahzad-11691444/

---

## Disclaimer

This project is created for learning, professional demonstration, and QA automation portfolio purposes. SauceDemo is a public practice application. All testing is limited to its publicly available demonstration environment.
