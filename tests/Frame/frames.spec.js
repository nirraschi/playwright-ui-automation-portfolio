import { test, expect } from '@playwright/test';

test.describe('Frames', () => {
    test.beforeEach(async ({ page }) =>{
        await page.goto('https://letcode.in/frame');
    })

    test('Ingresar nombre y apellido en frame simple', async ({ page }) =>{
        const frame = await page.frameLocator('#firstFr')
        await frame.locator('[name="fname"]').fill('Nirvana')
        await frame.locator('[name="lname"]').fill('Raschi')

        const result = await frame.locator('p.has-text-info').innerText()
        expect(result).toContain('Nirvana Raschi')
    })

    test('Interacturar con frame anidado', async ({ page }) => {

        const parentFrame = await page.frameLocator('#firstFr')
        const childFrame = await parentFrame.frameLocator('iframe[src="innerframe"]')

        await childFrame.getByRole('textbox', { name: 'email' }).fill('nirraschi@gmail.com')

        await expect(childFrame.locator('[name="email"]')).toHaveValue('nirraschi@gmail.com')

    })
})