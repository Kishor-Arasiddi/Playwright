import{test,Locator,expect} from '@playwright/test';
import { log } from 'console';

test('Verify auto suggest dropdowns',async({page})=>{
    await page.goto("https://www.youtube.com/")
    const searchField=await page.locator("[name='search_query']").fill("playwright")
     await page.waitForTimeout(3000)

     // Get all suggested options
     // To pause the page use cmd+shift+p in devtools  --> enter emulate focused page
    const options = page.locator("span[role='button']")
   let count= await options.count()
   console.log(count);

    console.log(await options.nth(5).innerText());

    for(let i=0;i<count;i++){
        console.log(await options.nth(i).innerText());
    }

    //click on the specific action
    for (let i=0;i<count;i++){
        let text=await options.nth(i).innerText()
        if(text === 'playwright'){
            await options.nth(i).click()
            break;
        }
    }
})