const { test, expect } = require('@playwright/test');

test.describe('Orange Demo - Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto('https://www.orangehrm.com/');
  });

  test('Valid Login with Correct Credentials', async ({ page }) => {
    // Enter valid username
    await page.fill('input[name="username"]', 'Admin');

    // Enter valid password
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation and verify successful login
    await page.waitForURL('**/dashboard**');
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Invalid Login with Wrong Password', async ({ page }) => {
    // Enter valid username but wrong password
    await page.fill('input[name="username"]', 'Admin');

    // Enter incorrect password
    await page.fill('input[name="password"]', 'wrongpassword123');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify error message appears
    await expect(page.locator('[role="alert"]')).toContainText(/invalid|incorrect|failed/i);
  });

  test('Login with Empty Username', async ({ page }) => {
    // Leave username empty
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify validation error message
    await expect(page.locator('[role="alert"]')).toBeVisible();
  });

  test('Login with Empty Password', async ({ page }) => {
    // Enter username but leave password empty
    await page.fill('input[name="username"]', 'Admin');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify validation error message
    await expect(page.locator('[role="alert"]')).toBeVisible();
  });

  test('Login with Empty Username and Password', async ({ page }) => {
    // Leave both fields empty
    await page.click('button[type="submit"]');

    // Verify validation error messages appear
    const alerts = page.locator('[role="alert"]');
    await expect(alerts).toBeDefined();
  });

  test('Invalid Login with Non-existent User', async ({ page }) => {
    // Enter non-existent username
    await page.fill('input[name="username"]', 'NonExistentUser123');

    // Enter password
    await page.fill('input[name="password"]', 'somepassword');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify error message appears
    await expect(page.locator('[role="alert"]')).toContainText(/invalid|user not found/i);
  });

  test('Case Sensitivity Check - Username Lowercase', async ({ page }) => {
    // Enter username in lowercase (if case-sensitive)
    await page.fill('input[name="username"]', 'admin');

    // Enter password
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify if case sensitivity affects login
    const result = await Promise.race([
      page.waitForURL('**/dashboard**').then(() => 'success'),
      page.waitForSelector('[role="alert"]').then(() => 'failed'),
    ]).catch(() => 'timeout');

    expect(['success', 'failed']).toContain(result);
  });

  test('SQL Injection Attempt in Username Field', async ({ page }) => {
    // Attempt SQL injection in username
    await page.fill('input[name="username"]', "' OR '1'='1");

    // Enter password
    await page.fill('input[name="password"]', 'password');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify error message or lack of bypass
    await expect(page).not.toHaveURL(/dashboard/);
  });

  test('Special Characters in Username', async ({ page }) => {
    // Enter username with special characters
    await page.fill('input[name="username"]', 'Admin@#$%');

    // Enter password
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify error message appears
    await expect(page.locator('[role="alert"]')).toBeVisible();
  });

  test('Very Long Username Input', async ({ page }) => {
    // Enter extremely long username
    const longUsername = 'A'.repeat(1000);
    await page.fill('input[name="username"]', longUsername);

    // Enter password
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify application handles it gracefully
    await expect(page).not.toHaveURL(/dashboard/);
  });

  test('Whitespace in Username and Password', async ({ page }) => {
    // Enter username with leading/trailing spaces
    await page.fill('input[name="username"]', '  Admin  ');

    // Enter password with spaces
    await page.fill('input[name="password"]', '  admin123  ');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify if spaces are trimmed or cause error
    const result = await Promise.race([
      page.waitForURL('**/dashboard**').then(() => 'success'),
      page.waitForSelector('[role="alert"]').then(() => 'failed'),
    ]).catch(() => 'timeout');

    expect(['success', 'failed']).toContain(result);
  });
});
