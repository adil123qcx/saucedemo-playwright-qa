
# SauceDemo QA Demonstration — Test Plan

**Prepared by:** Adil Shahzad  
**Role:** QA Engineer — Manual & Automation Testing  
**Application under test:** SauceDemo (public practice e-commerce application)  
**URL:** https://www.saucedemo.com/  
**Execution status:** COMPLETED — 8/8 automated tests passed.

---

## 1. Objective

Demonstrate a structured QA approach for common e-commerce journeys, including authentication, product listing, sorting, cart management, checkout validation, order completion and logout.

The project demonstrates practical UI automation using Playwright and TypeScript.

## 2. Scope

- Login with valid and invalid credentials
- Inventory page and product count
- Product sorting by price
- Add/remove cart operations
- Cart content verification
- Required-field validation at checkout
- End-to-end checkout completion
- Logout

## 3. Out of Scope

- Real payment processing (this is a demo application)
- Backend/database verification
- Load or stress testing
- Security penetration testing
- Cross-browser execution in this initial run
- Mobile device execution in this initial run

## 4. Test Environment

- Target URL: https://www.saucedemo.com/
- Automation framework: Playwright
- Programming language: TypeScript
- Browser: Chromium
- Browser version: 159.0.8154.6
- Operating system: Windows 11
- Runtime: Node.js v24.19.0
- npm version: 11.17.0
- Test account: `standard_user` (public demo credential; do not reuse for private systems)

## 5. Entry Criteria

- Demo site is reachable.
- Project dependencies are installed.
- Chromium browser is installed through Playwright.
- Public demo test account is available.
- Test scripts and configuration are present.

## 6. Exit Criteria

- All in-scope tests have a recorded Pass/Fail/Blocked result.
- Failures include trace/screenshot evidence where available.
- Every defect candidate has reproducible steps and expected/actual results.
- Environment and execution date are recorded.

## 7. Risks and Limitations

- Public demo site availability and behavior may change.
- Network latency may cause intermittent failures.
- Demo behavior is not evidence about any commercial client's website.
- No defect should be reported unless personally reproduced during execution.
- The current results represent one Chromium execution, not cross-browser validation.

## 8. Execution Record

**Execution date:** 25 November 2026  
**Execution time shown in report:** 9:19:11 PM  
**Tester:** Adil Shahzad  
**Operating system:** Windows 11  
**Browser:** Chromium 159.0.8154.6  
**Node.js:** v24.19.0  
**npm:** 11.17.0  
**Playwright version:** 1.65.1 
**Run command:** `npm test`

### Execution Summary

| Metric | Result |
|---|---:|
| Total tests | 8 |
| Passed | 8 |
| Failed | 0 |
| Flaky | 0 |
| Skipped | 0 |
| Pass rate | 100% |
| Total execution time | 14.3 seconds |

### Individual Test Results

| Test ID | Scenario | Result |
|---|---|---|
| TC-01 | Reject invalid login credentials | PASS |
| TC-02 | Login and view inventory | PASS |
| TC-03 | Sort products by price low to high | PASS |
| TC-04 | Add product and verify cart badge | PASS |
| TC-05 | Remove product from cart | PASS |
| TC-06 | Validate required checkout information | PASS |
| TC-07 | Complete standard checkout journey | PASS |
| TC-08 | Verify logout returns to login screen | PASS |

**Overall result: 8/8 tests passed successfully.**

HTML report: `playwright-report/index.html`

The execution results were verified using the Playwright HTML report generated on the local Windows machine.

## 9. Defect Handling

For every failure, capture:

- Test ID
- Application URL
- Environment details
- Exact reproduction steps
- Expected result
- Actual result
- Severity and priority rationale
- Screenshot or trace evidence
- Reproducibility status

Distinguish application defects from environment or automation-script failures.

A failed automated test should not automatically be classified as an application defect.

## 10. Conclusion

The initial SauceDemo Playwright automation suite completed successfully.

All eight automated scenarios passed in the recorded Chromium execution, with zero failed, flaky or skipped tests.

This project demonstrates practical experience with:

- Playwright UI automation
- TypeScript-based test scripts
- Functional and regression testing
- E-commerce workflow validation
- Automated test reporting
- Test execution analysis

This is an independent QA portfolio demonstration using a public practice application. No commercial client defects or production testing results are claimed.
