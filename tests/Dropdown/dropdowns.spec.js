import {test, expect} from '@playwright/test';

test.describe('Dropdowns', async ({page}) => {
    test.beforeEach(async () => {
        await page.goto('https://letcode.in/dropdowns')
        await expect(page).toHaveTitle(/Dropdown/);
    })

    test('Select the apple using visible text', async () => {

        const fruitDropdown = await page.locator('#fruits')
        await fruitDropdown.selectOption({label: 'Apple'})

        const selected = await fruitDropdown.inputValue();
        await expect(selected).toBe('Apple')        
    })

    test('Select your super hero', async ({page}) => {
        const herosDropdown = await page.locator('#superheros')
        const isMultiple = await herosDropdown.isMultiple()
        await expect(isMultiple).toBe(true)

        await herosDropdown.selectOption([
            {label: 'Tor'},
            {label: 'Batman'}
        ])

        await expect(herosDropdown).toHaveValue(['batman', 'tor'])
        
    })


    test('Select the last programming language and print all the options', async ({page}) => {
        const langDropdown = await page.locator('#lang')
        const options = await langDropdown.locator('option').allTextContents();

        const lastIndex = options.length - 1;

        await lagDropdown.selectOption({index: lastIndex})

        const selected = await langDropdown.inputValue();
        await expect(selected).toBe(options[lastIndex])

        console.log('Lista de opciones:')
        options.forEach((option, index) => {
            console.log(`${index + 1}:${option}`) 
        })
    })

})