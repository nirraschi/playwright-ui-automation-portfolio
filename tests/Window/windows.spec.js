import { test, expect } from '@playwright/test';

test.describe('Windows', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/window');        
    })

    test('Interact with child window', async ({ page, context }) => {

        // Guardo la ventana principal
        const mainPage = page;

        // 1) Click on the home button
        //Esperamos la nueva ventana y hacemos clic en el botón para abrirla 'Home'

        const [homePage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator('#home').click()
        ])

        await homePage.waitForLoadState()
        // 2) y 3) Goto the newly opened tab + Print the title of the page

        const pageText = await homePage.locator('h1').innerText()

        console.log('Titulo: ' + pageText );

        // 4) Close the parent window
        await mainPage.close()

        // 5) Close de child window
        await homePage.close()

    })
        
        
    test('Interact with muiltple windows', async ({ page, context }) => {

        // 6) y 7) Click on the Muiltiple windows button + Print all the window title

        const parentWindow = page;

        await page.locator('#multi').click()

        await page.waitForTimeout(1000)

        const allPages = context.pages()
        
        for(const p of allPages){
            console.log(await p.title())
        }

        for(const p of allPages){
            await p.close()
        }

        await expect(context.pages().length).toBe(0)
    
    })


})