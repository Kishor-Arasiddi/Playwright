/*
Annotations:
only
skip
fail
fixme
slow 
*/

import{test,expect} from '@playwright/test'

// test.only('Test 1',async({page})=>{
//     await page.goto("https://www.google.com")
//     await expect(page).toHaveTitle('Google')
// })

// test.skip('Test 2',async({page})=>{
//     await page.goto("https://www.google.com")
//     await expect(page).toHaveTitle('Google')
// })

// test.fail('Test 3',async({page})=>{
//     await page.goto("https://www.google.com")
//     await expect(page).toHaveTitle('Google')
// })

test.fixme('Test 4',async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle('Google')
})

//slow anntoation can't be used directly with test it is used inside the the method
test('Test 6',async({page})=>{
    test.slow()       // It will triple default timeout (default:30s --> 30*3 == 90s) 
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle('Google')
})