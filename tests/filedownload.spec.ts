import{test,expect} from '@playwright/test';
import fs from 'fs';


test("Verify the Text file download functionlaity",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.locator('#inputText').fill("Hello Playwright!!!");
    await page.locator('#generateTxt').click();

    //start waitign for the download before clicking
   const [download]= await Promise.all(
        [ 
            // Here await is not neeeded because these 2 actions need to performed at a time
            page.waitForEvent("download"),
            page.locator('#txtDownloadLink').click()
        ])

    const downloadPath='tests/Downloads/testfile.txt';
    await download.saveAs(downloadPath);

    //Check if file exists in the path
   const fileExists= fs.existsSync(downloadPath); //return true if file exists, false if file not exists
   expect(fileExists).toBeTruthy();
   
   //To cleanup the downloaded file
   if(fileExists){
    fs.unlinkSync(downloadPath);
   }
})

test.only("Verify the PDF file download functionlaity",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.locator('#inputText').fill("Hello Playwright!!!");
    await page.locator('#generatePdf').click();

    //start waitign for the download before clicking
   const [download]= await Promise.all(
        [ 
            // Here await is not neeeded because these 2 actions need to performed at a time
            page.waitForEvent("download"),
            page.locator('#pdfDownloadLink').click()
        ])

    const downloadPath='tests/Downloads/testfile.pdf';
    await download.saveAs(downloadPath);

    //Check if file exists in the path
   const fileExists= fs.existsSync(downloadPath); //return true if file exists, false if file not exists
   expect(fileExists).toBeTruthy();
   
//    To cleanup the downloaded file
   if(fileExists){
    fs.unlinkSync(downloadPath);
   }
})