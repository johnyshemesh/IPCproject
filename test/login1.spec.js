import { test, expect } from '@playwright/test';

test('open login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('locators', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
  const locator = page.locator('[data-test="login-button"]')
  await expect(locator).toBeVisible()
})

test('locators 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
  const locator = page.getByRole('button', { name: 'Login' })
  await expect(locator).toBeVisible()
})

test('locators 2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
  const locator = page.getByText('Login')
  await expect(locator).toBeVisible()
})

test('actions', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/')
  await page.getByTestId('name-input').fill('Johny Shim')
  await page.getByRole('button', { name: 'populate' }).click()
  await page.getByTestId('name-input').clear()
  await page.getByRole('checkbox', { name: 'Support for testing on remote devices' }).check()
  await page.getByTestId('preferred-interface-select').selectOption('JavaScript API')
  await page.pause()
})

test('assertions', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/')
  expect(page.getByRole('heading', { name: 'example' })).toBeVisible()
  await page.getByTestId('name-input').fill('Johny Shim')
  await page.getByRole('button', { name: 'submit' }).click()
})

test('assertions 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
  await page.getByRole('textbox', { name: 'Username' }).fill('Johny')
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('Johny')
})

test('locator by class', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
  await page.getByRole('textbox', { name: 'Username' }).fill('Johny')
  await expect(page.locator('.login_logo')).toHaveText('Swag Labs')
})

test('locator by id (text)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
  await expect(page.locator('[id="login_credentials"]')).toContainText('standard_user')
})

test('login and add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user')
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce')
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page).locator('[data-test="title"]').toHaveText('Products')
  await page.getByRole('button', { name: 'add to cart' }).first().click()
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(1)
  await page.pause()
})

test('username is empty', async ({ page }) => {
  await page.goto('https://www.saucedemo.com')
  await page.getByRole('textbox', { name: 'Username' }).toBeEmpty()
})

test('assertions', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/')
  await page.getByRole('textbox', { name: 'Support for testing on remote devices' }).check()
  await expect(page.getByRole('textbox', { name: 'Support for testing on remote devices' }))
    .toBeChecked()
})

test('assertions: button is disabled', async ({ page }) => {
await page.goto('https://devexpress.github.io/testcafe/example/')
await expect(page.getByRole('button', { name: 'submit' })).toBeDisabled()
})

test('assertions: button is enabled', async ({ page }) => {
await page.goto('https://devexpress.github.io/testcafe/example/')
await page.getByRole('textbox', { name: 'Name' }).fill('Johny Shim')
await expect(page.getByRole('button', { name: 'submit' })).toBeEnabled()
})

test('assertions: button is enabled 2', async ({ page }) => {
await page.goto('https://devexpress.github.io/testcafe/example/')
await page.getByRole('checkbox', { name: 'I have tried TestCafe' }).check()
await  expect(page.getByRole('checkbox', { name: 'I have tried TestCafe' })).toBeChecked()
await expect(page.getByRole('button', { name: 'submit' })).toBeEnabled()
})

test('assertions: to have url', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/')
  await page.getByTestId('name-input').type('Johny Shim')
  await page.getByRole('button', { name: 'submit' }).click()
  await expect(page).toHaveURL('https://devexpress.github.io/testcafe/example/thank-you.html')
});


