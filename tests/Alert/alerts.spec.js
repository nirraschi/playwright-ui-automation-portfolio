import { test, expect } from '@playwright/test';

test.describe('Alerts', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/alert');
    })

    test('Accept the Alert', async ({ page }) => {

        await page.once('dialog', async dialog => {
            console.log('Mensaje de alerta:', dialog.message());
            await expect(dialog.message()).toBe('Hey! Welcome to LetCode');
            await dialog.accept();
        })
        await page.locator('#accept').click();
    })

    test('Dismiss the Alert & print the alert text', async ({ page }) => {
        await page.once('dialog', async dialog => {
            console.log('Mensaje de alerta:', dialog.message());
            await expect(dialog.message()).toBe('Are you happy with LetCode?');
            await dialog.dismiss();
        })
        await page.locator('#confirm').click();

    })

    test('Type your name & accept', async ({ page }) => {

        const name = 'Nirvana'
        await page.once('dialog', async dialog => {
        await expect(dialog.message()).toContain('Enter your name');      
        await dialog.accept(name);
        })

        await page.locator('#prompt').click();
        const resultText = await page.locator('#myName').innerText()
        console.log(resultText)

        await expect(resultText).toBe('Your name is: '+ name);
        
    })
    
    test('Dismiss modal alert', async ({ page }) =>{
        await page.locator('#modern').click();
        await expect (page.locator('div.modal-content')).toBeVisible();
        const modalMessage = await page.locator('div.card-content p.title').innerText();
        await expect(modalMessage).toBe('Modern Alert - Some people address me as sweet alert as well');
        await page.locator('button[aria-label="close"]').click();
        await expect(page.locator('div.modal-content')).toBeHidden();
    })


})