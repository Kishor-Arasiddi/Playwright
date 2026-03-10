import{test,expect} from '@playwright/test'

test('Verify dropdown conatins duplicates',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dropdownOptions= page.locator("#colors>option")
    const optionText= (await dropdownOptions.allTextContents()).map(text=>text.trim())

    let myset=new Set();  //Set --> Duplicate values are not allowed
    let duplicates:string[]=[];  //array --> Duplicate values are allowed

    for (const text of optionText){
        if(myset.has(text)){
        duplicates.push(text);
        }else{
            myset.add(text)
        }
    }
    console.log("Duplicates values are ==> ",duplicates);

    expect(duplicates.length).not.toBe(0)
    
})
