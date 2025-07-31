import {test, expect} from '@playwright/test'

test.describe('Button', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://letcode.in/button')
    })

    test('Goto Home and come back here using driver commanda', async ({page}) => {
        await page.click('#home')
        await page.waitForURL('https://letcode.in/')
        await expect(page).toHaveURL('https://letcode.in/')
        await page.goBack()
        await expect(page).toHaveURL('https://letcode.in/button')
    })

    test('Get the X & Y co-ordinates', async({page}) => {
        const button = await page.locator('#position').boundingBox()
        console.log(`X: ${button.x}, Y: ${button.y}`)
        expect(button.x).toBeGreaterThan(0)
        expect(button.y).toBeGreaterThan(0)        
    })

    test('Find the color of the button', async({page}) => {
        const color = await page.locator('#color').evaluate(c => getComputedStyle(c).backgroundColor);
        console.log(`Color: ${color}`)
        expect(color).toBeTruthy      
    })

    test('Confirm button is disabled', async ({page}) => {
        const isEnabled = await page.getByRole('button', {name: 'Disabled'}).isDisabled()
        expect(isEnabled).toBe(true)
    })

    test('Click and Hold Button', async({page}) => {
        const holdButton = await page.locator('button#isDisabled.button.is-primary')
        await holdButton.click({delay: 2000})

        const text = await holdButton.textContent()
        console.log(`Button says: ${text}`)
        expect(text).toBe(' Button has been long pressed')
    })
})