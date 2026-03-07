//Two types of css locators
//1] Abosulte CSS Selector.        2] Relative CSS Selector


//Different Combinations
//tag with id        tag#id.        or     #id
//tag with class     tag.class      or    .class     
//tag with any other attribute      tag[attribute =value]    or       [attribute=value]    
//tag with attribute and class      tag.class[attribute=value]     or       .class[attribute=value]

//  Ex: <p id='para' class='main> </p>
//  ^ -> indicates start-with()        Ex: p[id^'pa'] 
//  $ -> indicates end-with()          Ex: p[id$'ra']
//  * -> indicates contains()          Ex: p[class*'ai']

import {test,expect,Locator} from "@playwright/test"

test("CSS Locators",async ({page})=>{
    page.goto("https://demowebshop.tricentis.com/")
    //ID 
//    let searchbar:Locator= page.locator("input#small-searchterms")
//    await expect(searchbar).toBeVisible();
//    await searchbar.fill("T-shirts");

// class
await page.locator("input.search-box-text.ui-autocomplete-input").fill("Shooes")


   await page.waitForTimeout(3000);
})

