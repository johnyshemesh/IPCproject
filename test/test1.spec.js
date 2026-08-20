import { test, expect } from '@playwright/test';
import { VALID_USER } from '../data/users.js'
import { BASE_URL, URLS } from '../data/urls.js'
import {LoginPage} from '../pages/LoginPage.js'
import {InventoryPage} from '../pages/InventoryPage.js'

test('login with valid user ', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.getByRole('textbox', { name: 'Username' }).fill(VALID_USER.username)
    await page.getByRole('textbox', { name: 'Password' }).fill(VALID_USER.password)
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page).toHaveURL(URLS.inventoryPage)
    await expect(page.locator('[data-test="title"]')).toHaveText('Products')
});

test('login with valid user 2', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    await loginPage.openPage(BASE_URL)
    await loginPage.login(VALID_USER.username, VALID_USER.password)
    await expect(page).toHaveURL(URLS.inventoryPage)
    await expect(inventoryPage.title).toHaveText('Products')
    
});

test('homepage title', async ({ page }) => {
    await page.goto('https://www.mreternalamor.com/')
    await expect(page.locator('.column-image > .no-js-hidden').first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .image-wrapper > .full-width > .image-media > .column-image > .no-js-hidden'))
    .toBeVisible();
    await expect(page.getByText('קולקציה טבעות נישואין')).toBeVisible();
    await expect(page.getByText('קולקציה טבעות אירוסין')).toBeVisible();
    await page.getByText('קולקציה טבעות נישואין').click();
});


