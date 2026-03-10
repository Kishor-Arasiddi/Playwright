import{test,Locator,expect} from "@playwright/test"

test("Verify dropdown is sorted",async({page})=>{ 
    await page.goto("https://testautomationpractice.blogspot.com/")
    const dropdownOption:Locator=page.locator("#colors>option")
    const optionText=(await dropdownOption.allTextContents()).map(text=>text.trim())
    // console.log(optionText);

    // const originalList=optionText;
    //In arrays concept the "sort() method is mutable"
    //This means it changes the order of the elements in the original array in place, 
    // rather than creating a new array with the sorted elements.
    // const sortedList=optionText.sort();

    //To avoid this problem will special operator("..."  Ex: [...optionText]) after using this it won't imapact original list
    const originalList=[...optionText]
    const sortedList=[...optionText.sort()]

    console.log(originalList);
    console.log(sortedList);  

    expect(originalList).not.toEqual(sortedList)
})