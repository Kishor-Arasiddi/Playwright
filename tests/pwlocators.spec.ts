import{test, expect, Locator} from "@playwright/test"
import { time } from "console";

test('Verify the locators', async ({page}) =>{
   await page.goto("https://demo.nopcommerce.com/")
   //1. getByAltText: Locate an element, usually image by it's text alternative
   let logo:Locator= page.getByAltText("nopCommerce demo store")
   await expect(logo).toBeVisible();

   //2. getByText: Locate by text content, this can match substring also (Ex: "welcome to") (Used for non-interactive elemnts ex: h1,p)
   //await expect(page.getByText("welcome to our store")).toBeVisible();

   //if we want avoid case sensitive we use regular expression (Ex: we can't validtae with uppercase and lowecase)
   //if we want use regular expression start and end with forward slash(/) in the need to use backward slash(\)
   ////i--> indicates ignore case sensitive.   s--> indicates space
    await expect(page.getByText(/Welcome\s+To\s+Our\s+store/i)).toBeVisible();

   //3. getByRole: Locate by implicit and explicit ccessbility attributes (used for interactive elemnts ex: checboxws,links,buttons)
    await page.getByRole("link",{name: 'Register'}).click();
    await expect(page.getByRole("heading",{name: 'Register'})).toBeVisible();

    //4. getByLabel: Locate a form control by associated label's text
    // page.getByLabel("FirstName").type("Virat"); //'type' method is deprecated 
    await page.getByLabel("FirstName").fill("Kohli"); 
    await page.getByLabel("LastName").fill("Kohli"); 
    await page.getByLabel("Email").fill("virat@yop.too.li"); 

    



})