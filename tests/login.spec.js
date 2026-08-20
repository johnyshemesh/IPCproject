import {test, expect} from '@playwright/test'

test.describe( ' negative login tests', () => {
    test.beforeEach (async () => {
// open website and navigate to the login page for each test case
    })
    test.beforeAll (async () => {
 //open website and navigate to the login page at once before before all the test are running    
    })
test.afterEach (async () => {})
test.afterAll (async () => {})
    test('login with existing username and invalid password' , async ({ page}) => {
//steps
    })
    test('login with invalid username and valid password' , async ({ page}) => {
//steps
    })


test ('locators', async ({ page}) => {
await page.goto('https://www.saucedemo.com')
const locator = page.locator('[data-test="login-button"]')
await expect(locator).toBeVisible()
})

