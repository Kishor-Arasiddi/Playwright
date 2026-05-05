import{test,expect} from '@playwright/test';

test("Verify screenshots",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const timestamp=Date.now();

    //Page Screenshot
    // await page.screenshot({path:'Screenshots/'+timestamp+'homepage.png'});

    //Full Page Screenshot
    // await page.screenshot({path:'Screenshots/'+timestamp+'fullpage.png',fullPage:true});

    //Element Screenshot
    await page.getByRole('img', { name: 'Tricentis Demo Web Shop' }).screenshot({path:'Screenshots/'+timestamp+'Element.png'});

    
    
});