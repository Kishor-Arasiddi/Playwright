import{test,Locator,expect} from "@playwright/test";

//Text input/Text Box
test("Text Input Actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    let textbox =page.locator("#name");
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();  //will check textbox is enabled

    const placeHolder=await textbox.getAttribute("placeholder");

    //Here await is not needed because we are getting value of the element not element itself
    expect(placeHolder).toBe("Enter Name");
    await textbox.fill("Virat Kohli");

    //This returns empty because textContent() will fetch the innertext not the filled text
    //Ex: <label for="textbox">Name:</label>   here it will fetch the text "Name:"
   console.log(await textbox.textContent()); 
    
    //This method will fetch and return the filled text
    console.log("Input of firstname:",await textbox.inputValue());
})