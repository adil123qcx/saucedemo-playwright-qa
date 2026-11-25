# SauceDemo QA Demonstration — Test Plan

**Prepared by:** Adil Shahzad  
**Role:** QA Engineer — Manual & Automation Testing  
**Application under test:** SauceDemo (public practice e-commerce application)  
**URL:** https://www.saucedemo.com/  
**Execution status:** NOT RUN in the preparation environment. Run locally before reporting outcomes.

## 1. Objective
Demonstrate a structured QA approach for common e-commerce journeys: authentication, product listing, sorting, cart management, checkout validation, order completion and logout.

## 2. Scope
- Login with valid and invalid credentials
- Inventory page and product count
- Product sorting by price
- Add/remove cart operations
- Cart content verification
- Required-field validation at checkout
- End-to-end checkout completion
- Logout

## 3. Out of scope
- Real payment processing (this is a demo application)
- Backend/database verification
- Load or stress testing
- Security penetration testing
- Cross-browser execution in this initial run
- Mobile device execution in this initial run

## 4. Test environment
- Target URL: https://www.saucedemo.com/
- Automation: Playwright + TypeScript
- Initial browser project: Chromium / Desktop Chrome
- Operating system/browser version: record the actual values at execution time
- Test account: `standard_user` (public demo credential; do not reuse for private systems)

## 5. Entry criteria
- Demo site is reachable
- Dependencies are installed
- Chromium browser is installed through Playwright
- Test account is available

## 6. Exit criteria
- All in-scope tests have a recorded Pass/Fail/Blocked result
- Failures include trace/screenshot evidence where available
- Every defect candidate has reproducible steps and expected/actual results
- Environment and execution date are recorded

## 7. Risks and limitations
- Public demo site availability and behavior may change.
- Network latency may cause intermittent failures.
- Demo behavior is not evidence about any commercial client's website.
- No defect should be reported unless personally reproduced during execution.

## 8. Execution record
Execution date: ____________________  
Tester: Adil Shahzad  
OS / version: ____________________  
Browser / version: ____________________  
Playwright version: ____________________  
Run command: `npm test`  
Passed: ____  Failed: ____  Skipped/Blocked: ____  
HTML report path: `playwright-report/index.html`

## 9. Defect handling
For every failure, capture the test ID, URL, environment, exact steps, expected result, actual result, severity rationale, screenshot/trace and reproducibility. Distinguish application defects from environment or automation-script failures.
