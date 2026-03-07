import{test,expect, Locator} from "@playwright/test"
import { log } from "console";

test("Xpath Locators", async ({page})=>{
   await page.goto("https://demowebshop.tricentis.com/") 
   // the below line code will give error "Unexpected token "/" while parsing css selector"
   // instead we can give '//' at starting or we can specify xpath=/html/body/div[4]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a
   // let RegisterLnk:Locator= page.locator("//html/body/div[4]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a");
  let RegisterLnk:Locator= page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a");
  await expect(RegisterLnk).toBeVisible();

  //we can index the elements using grouping index or using method first()
  //let digitalLnk:Locator= page.locator("(//a[@href='/digital-downloads'])[1]")
  let digitalLnk:Locator= page.locator("//a[@href='/digital-downloads']").first();
   await expect(digitalLnk).toBeVisible();

 //contains():
 let products:Locator=page.locator("//h2//a[contains(@href, computer)]");
 let productCount:number=await products.count();
 console.log("Number of Computer related Products= ",productCount);
 expect(productCount).toBeGreaterThan(0);

 //console.log(await products.textContent()).  
 console.log("Number of first computer related product=",await products.first().textContent())
 console.log("Number of last computer related product=",await products.last().textContent())
 console.log("Number of nth computer related product=",await products.nth(0).textContent()) //index will start from zero

 let productTitles:string[]=await products.allTextContents();
 for(let pt of productTitles){
    console.log(pt);  
 }

 //starts-with
let buildLinks:Locator=page.locator("//h2//a[starts-with(@href,'/build')]")
let count:number=await buildLinks.count()
expect(count).toBeGreaterThan(0);

let buildTitles:string[]= await buildLinks.allTextContents();
for(let bt of buildTitles){
    console.log(bt);  
}

//last()
let lastItem:Locator=page.locator("//div[@class='column follow-us']//li[last()]")
await expect(lastItem).toBeVisible();
console.log("Last Item",lastItem.textContent());

})