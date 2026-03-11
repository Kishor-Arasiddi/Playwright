import{test,Locator,expect} from '@playwright/test'

//Actions --> For actions the auto wait functionality will wait upto 30sec(default)
//Assertions --> For assertions the auto wait will wait for 5 sec (default)

test("Autowaiting Functionality",async({page})=>{
    //This is used to change time test level
    test.setTimeout(35000);

    //test.slow() //This method triple the time ex: if there is "30000 it will change to 90000"

    await page.goto("https://demowebshop.tricentis.com/")
    let search:Locator=page.locator("[name='q']")
    // After giving "force" action that won't perform actionalibilty checks it avoid autowaiting functionalty
    // It will forcefully do the action
    // force action is only work actions not for the assertions
    await search.fill("Samsung",{force:true})
    let searchBtn=page.locator("[type='submit']")
    await searchBtn.click({force:true});

    // Here timeout is used to change for test level for assertions
    expect(search).toBeVisible({timeout:15000})
    expect(searchBtn).toBeEnabled()
})
