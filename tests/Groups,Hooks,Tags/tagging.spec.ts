import{test,expect} from '@playwright/test'

//Approach 1: 
test('@Sanity @Regression Test 1',async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle('Google')
})

//Approach 2: Recommended
test('Test 2',{tag:'@Sanity'},async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle('Google')
})

//To add multiple tags
test('Test 3',{tag:['@Sanity','@Regression']},async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle('Google')
})