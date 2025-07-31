import { test, expect } from '@playwright/test';

test.describe('Input en LetCode', () => {
    test.beforeEach(async ({ page}) => {
        await page.goto('https://letcode.in/edit');        
    })

    test('1️⃣ Enter your full Name', async ({ page }) => {
        await page.locator('#fullName').fill('User Name Test');
        await expect(page.locator('#fullName')).toHaveValue('User Name Test')
    })

    test('2️⃣ Append text and press keyboard tab', async ({ page }) => {
    await page.locator('#join').isVisible();
    await page.type('#join', '- QA');
    await expect(page.locator('#join')).toHaveValue(/QA/);
    })

    test('3️⃣ Get value from input', async ({ page }) => {
        const value = await page.getAttribute('#getMe', 'value');
        console.log('Value of input is: ' + value);
        await expect(value).toBeTruthy()        
    })

    test('4️⃣ Clear the text', async ({ page }) => {
        await page.fill('#clearMe','')
        await expect(page.locator('#clearMe')).toHaveValue('')
    })

    test('5️⃣ Confirm edit field is disabled', async ({ page }) => {
        const isDisabled = await page.isDisabled('#noEdit')
        await expect(isDisabled).toBe(true)
    })

    test('6️⃣ Confirm text is readonly', async ({ page }) => {
        const isReadonly = await page.isEditable('#dontwrite')
        await expect(isReadonly).toBe(false)
    })

})
