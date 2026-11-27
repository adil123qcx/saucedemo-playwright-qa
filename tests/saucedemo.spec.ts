
import { test, expect } from '@playwright/test';
import { meta } from 'reporting-labs';

const USER = process.env.SAUCE_USERNAME || 'standard_user';
const PASS = process.env.SAUCE_PASSWORD || 'secret_sauce';

test.describe('SauceDemo - portfolio demonstration tests', () => {
  test('TC-01: reject invalid credentials with a visible error', async ({ page }) => {
    meta({
      priority: 'P1',
      severity: 'high',
      feature: 'Authentication',
      owner: 'Adil Shahzad'
    });

    await page.goto('/');
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('TC-02: allow standard user to log in and view inventory', async ({ page }) => {
    meta({
      priority: 'P1',
      severity: 'high',
      feature: 'Authentication',
      owner: 'Adil Shahzad'
    });

    await page.goto('/');
    await page.locator('[data-test="username"]').fill(USER);
    await page.locator('[data-test="password"]').fill(PASS);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });

  test('TC-03: sort products by price low to high', async ({ page }) => {
    meta({
      priority: 'P2',
      severity: 'medium',
      feature: 'Inventory',
      owner: 'Adil Shahzad'
    });

    await login(page);
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(value => Number(value.replace('$', '')));
    expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
  });

  test('TC-04: add a product and verify cart badge', async ({ page }) => {
    meta({
      priority: 'P1',
      severity: 'high',
      feature: 'Shopping Cart',
      owner: 'Adil Shahzad'
    });

    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });

  test('TC-05: remove a product from the cart', async ({ page }) => {
    meta({
      priority: 'P2',
      severity: 'medium',
      feature: 'Shopping Cart',
      owner: 'Adil Shahzad'
    });

    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    await expect(page.locator('.cart_item')).toHaveCount(0);
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

  test('TC-06: require checkout customer information', async ({ page }) => {
    meta({
      priority: 'P1',
      severity: 'high',
      feature: 'Checkout',
      owner: 'Adil Shahzad'
    });

    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('TC-07: complete the standard checkout journey', async ({ page }) => {
    meta({
      priority: 'P0',
      severity: 'critical',
      feature: 'Checkout',
      owner: 'Adil Shahzad'
    });

    await login(page);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('Adil');
    await page.locator('[data-test="lastName"]').fill('Shahzad');
    await page.locator('[data-test="postalCode"]').fill('46000');
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/checkout-step-two\.html/);
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await page.locator('[data-test="finish"]').click();

    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

  test('TC-08: logout returns the user to the login screen', async ({ page }) => {
    meta({
      priority: 'P1',
      severity: 'high',
      feature: 'Authentication',
      owner: 'Adil Shahzad'
    });

    await login(page);
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await expect(page).toHaveURL('/');
  });
});

async function login(page: import('@playwright/test').Page) {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill(USER);
  await page.locator('[data-test="password"]').fill(PASS);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory\.html/);
}
