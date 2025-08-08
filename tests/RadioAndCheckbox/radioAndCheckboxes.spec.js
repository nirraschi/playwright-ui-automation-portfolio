import { test, expect } from '@playwright/test';

test.describe('Radio and Checkbox', async() => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/radio')
    })

    test('Select any one', async ({ page }) => {
        await page.locator('#yes').check()
        await expect(page.locator('#yes')).toBeChecked()
    })

    test('Confirm you can select only one radio buttom', async({ page }) => {
        const yesRadio = await page.locator('input[id="one"]')
        const noRadio = await page.locator('input[id="two"]')

        await yesRadio.check()
        await expect(yesRadio).toBeChecked()
        await expect(noRadio).not.toBeChecked()

    })

    test('Find de bug', async ({ page }) =>{
        const yesRadio =  await page.locator('input[id="nobug"]')
        const noRadio = await page.locator('input[id="bug"]')

        await yesRadio.check()
        await expect(yesRadio).toBeChecked()
        await expect(noRadio).not.toBeChecked()

        await noRadio.check()
        await expect(noRadio).toBeChecked()
        await expect(yesRadio).toBeChecked() //Because here is the bug
    })

    test('Find which one is selected', async ({ page }) =>{
        const fooRadio = await page.locator('input[id="foo"]')
        const barRadio = await page.locator('input[id="notfoo"]')

        if (await fooRadio.isChecked()){
            console.log('Foo is selected')
        } else if (await barRadio.isChecked()){
            console.log('Bar is selected')
        }
    })
    test('Confirm de last field is disabled', async ({page}) =>{
        const container = await page.locator('div[class="control"]')
        const disabled = await container.locator('input').last()
        await expect(disabled).toBeDisabled()

        console.log("El botón desabilitado es: ", await disabled.locator('..').innerText())
    })

    test('Find if the checkbox is selected', async ({page}) =>{
    const checkbox = await page.locator('input[type="checkbox"][checked]')
    await (expect(checkbox).toBeChecked())
    })

    test('Agree the T&C', async ({page}) =>{
        const agreeLabel = await page.locator('label:has-text("I agree to the") >> input')
        await agreeLabel.check()
        await (expect(agreeLabel).toBeChecked())
    })

}
)