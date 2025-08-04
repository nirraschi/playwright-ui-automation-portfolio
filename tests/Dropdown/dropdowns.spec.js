import {test, expect} from '@playwright/test';

test.describe('Dropdowns', async () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://letcode.in/dropdowns')
        await expect(page).toHaveTitle(/Dropdown/);
    })

    test('Select the apple using visible text', async ({page}) => {

        const fruitDropdown = await page.locator('#fruits')
        await fruitDropdown.selectOption({label: 'Apple'})

        const selected = await fruitDropdown.inputValue()

        await expect(selected).toBe('0')        
    })

    test('Select your super hero', async ({page}) => {
        const herosDropdown = await page.locator('#superheros')

        await herosDropdown.selectOption('Batman')

        await expect(herosDropdown).toHaveValue('bt')
        
    })


    test('Select the last programming language and print all the options', async ({page}) => {
        const langDropdown = await page.locator('#lang')
        const options = await langDropdown.locator('option').allTextContents();

        const lastIndex = options.length - 1;

        await langDropdown.selectOption({ index: lastIndex });

        const selected = await langDropdown.locator('option:checked').innerText();

        console.log('Lenguaje seleccionado: ', selected)

        console.log('Lista de opciones:')
        options.forEach((option, index) => {
        console.log(`${index + 1}:${option}`) 
        })

        expect(options.length).toBeGreaterThan(1);
    })

    test('Select India using value & print the selected value', async ({page}) => {
        
        const countryDropdown = await page.locator('#country')        
        const selectedCountry = await countryDropdown.selectOption({value: 'India'})

        await expect(countryDropdown).toHaveValue('India')

        console.log(`Selected country: ${selectedCountry}`)
        
    })

})