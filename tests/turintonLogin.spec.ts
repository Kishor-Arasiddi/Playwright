import{test,Locator,expect} from "@playwright/test"

test("Verify the Login functionality",async ({page})=>{
   await page.goto("https://dev-insights.turinton.ai/")
   await page.locator("input#login_email").fill("testing@grr.la")
   await page.locator("input#login_password").fill("Password@1234")
   await page.locator("button[type='submit']").click();
   await page.getByRole('img',{name:'menu'}).click()
   await page.locator("//span[text()='Discover Agent']/..").click()
   await page.locator("(//span[text()='Data Groups']/..)[1]").click()
   await page.getByText("Create New Group").click()
   await page.getByPlaceholder("Set your group name").fill("Data Group1")
   await page.locator("button[type=submit]>span").click();
});