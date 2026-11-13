import { test, expect } from '@playwright/test';
import { IpcProjectLocators, CheckoutInformation } from '../helpers/ipc-project-helpers';
import { LoginPage } from '../pages/LoginPage';
import { BASE_URL, URLS } from '../data/urls';
import { InventoryPage } from '../pages/InventoryPage';
import { VALID_USER ,PROBLEM_USER, PERFORMANCE_GLITCH_USER, ERROR_USER , VISUAL_USER, LOCKED_OUT_USER, WRONG_PASSWORD, WRONG_USERNAME} from '../data/users';





test('sanity test', async ({ page }) => {
    const ipcProjectLocators = new IpcProjectLocators(page);
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutInformation = new CheckoutInformation(page);


    //1.Login
    await page.goto(BASE_URL);
    await loginPage.login(VALID_USER.username, VALID_USER.password);
    await expect(page).toHaveURL(URLS.inventoryPage);
    await expect(inventoryPage.title).toHaveText('Products');
    await expect(page).toHaveURL(URLS.inventoryPage);
    await expect(ipcProjectLocators.ProductsTitle).toHaveText('Products');
    //2.add Items
    await ipcProjectLocators.AddfirstProduct.click();
    await ipcProjectLocators.AddsecondProduct.click();
    await expect(ipcProjectLocators.CartBadge).toHaveText('2')
    //3.Cart and checkout
    await ipcProjectLocators.CartBadge.click();
    await expect(page).toHaveURL(URLS.cartPage);
    await expect(inventoryPage.title).toHaveText('Your Cart');
    await expect(ipcProjectLocators.CartBadge).toHaveText('2');
    await expect(ipcProjectLocators.CartItem).toHaveCount(2);
    await ipcProjectLocators.CheckoutButton.click();
    await expect(page).toHaveURL(URLS.checkoutStepOne);
    await expect(inventoryPage.title).toHaveText('Checkout: Your Information');
    //4.Data entry
    await checkoutInformation.checkout('Johny', 'Shim', '1234567');
    await expect(page).toHaveURL(URLS.checkoutStepTwo);
    await expect(inventoryPage.title).toHaveText('Checkout: Overview');
    //5.Final confirmation
    await ipcProjectLocators.FinishButton.click();
    await expect(page).toHaveURL(URLS.checkoutComplete);
    await expect(inventoryPage.title).toHaveText('Checkout: Complete!');
    await expect(ipcProjectLocators.CompleteMessage).toHaveText('Thank you for your order!')
})

test.describe('login with valid credentials', () => {
    
    let loginPage;
    let inventoryPage;
    test.beforeEach(async ({ page }) => {
       
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        await page.goto(BASE_URL);

    })
    test('successful login with (standard_user)', async ({ page }) => {
         await loginPage.login(VALID_USER.username, VALID_USER.password);
        await expect(page).toHaveURL(URLS.inventoryPage);
        await expect(inventoryPage.title).toHaveText('Products');
    })
    test('successful login with (problem_user)', async ({ page }) => {
        await loginPage.login(PROBLEM_USER.username, PROBLEM_USER.password);
        await expect(page).toHaveURL(URLS.inventoryPage);
        await expect(inventoryPage.title).toHaveText('Products');
    })
    test('successful login with (performance_glitch_user)', async ({ page }) => {
        test.setTimeout(10000);
        await loginPage.login(PERFORMANCE_GLITCH_USER.username, PERFORMANCE_GLITCH_USER.password);
        await expect(page).toHaveURL(URLS.inventoryPage);
        await expect(inventoryPage.title).toHaveText('Products');
    });
    test('successful login with (error_user)', async ({ page }) => {
        await loginPage.login(ERROR_USER.username, ERROR_USER.password);
        await expect(page).toHaveURL(URLS.inventoryPage);
        await expect(inventoryPage.title).toHaveText('Products');
    })
    test('successful login with (visual_user)', async ({ page }) => {
        await loginPage.login(VISUAL_USER.username, VISUAL_USER.password);
        await expect(page).toHaveURL(URLS.inventoryPage);
        await expect(inventoryPage.title).toHaveText('Products');

    });

});


test.describe('login with invalid credentials', () => {
    let ipcProjectLocators;
    let loginPage;
    test.beforeEach(async ({ page }) => {
        ipcProjectLocators = new IpcProjectLocators(page);
        loginPage = new LoginPage(page);
         await page.goto(BASE_URL);

    });

    test(' Login with locked out user', async ({ page }) => {
        await loginPage.login(LOCKED_OUT_USER.username, LOCKED_OUT_USER.password);
        await expect(ipcProjectLocators.ErrorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');

    });


    test('Login with valid username and invalid Password', async ({ page }) => {
        await loginPage.login(WRONG_PASSWORD.username, WRONG_PASSWORD.password);
        await expect(ipcProjectLocators.ErrorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

    })

    test('Login with invalid username and valid Password', async ({ page }) => {
        await loginPage.login(WRONG_USERNAME.username, WRONG_USERNAME.password);
        await expect(ipcProjectLocators.ErrorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

    })
    test('Login with invalid username and invalid Password', async ({ page }) => {
        await loginPage.login(WRONG_USERNAME.username, WRONG_PASSWORD.password);
        await expect(ipcProjectLocators.ErrorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

    })
    test('Login with empty username and valid Password', async ({ page }) => {
        await loginPage.login('', VALID_USER.password);
        await expect(ipcProjectLocators.ErrorMessage).toHaveText('Epic sadface: Username is required');

    })
    test('Login with invalid username empty Password', async ({ page }) => {
        await loginPage.login(VISUAL_USER.username, '');
        await expect(ipcProjectLocators.ErrorMessage).toHaveText('Epic sadface: Password is required');

    })
    test('Login with empty username and empty Password', async ({ page }) => {
        await loginPage.login('', '');
        await expect(ipcProjectLocators.ErrorMessage).toHaveText('Epic sadface: Username is required');

    })
})






