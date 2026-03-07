import{test,Locator,expect} from "@playwright/test";

//Checkbox actions
test.only("Checkbox Actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //Select specific checkbox
    let sundayCheckbox = page.getByLabel("Sunday")
    // await sundayCheckbox.check();
    // await expect(sundayCheckbox).toBeChecked()

    //Select all the checkboxes
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const checkboxes=days.map(index => page.getByLabel(index))
    expect(checkboxes.length).toBe(7);

    // for(let checkbox of checkboxes){
    //    await checkbox.check()
    // }

    // //Uncheck last 3 checkboxes 
    // for(let checkbox of checkboxes.slice(-3)){
    //     await checkbox.uncheck();
    //     await expect(checkbox).not.toBeChecked()
    // }

    // //Toggle checkboxes: If checked, uncheck; If not checked, check
    // for (const checkbox of checkboxes){
    //     if(await checkbox.isChecked() ){
    //         await checkbox.uncheck()
    //         await expect(checkbox).not.toBeChecked()
    //     }else{
    //         await checkbox.check()
    //         await expect(checkbox).toBeChecked()
    //     }
    // }

    // Randomly select checkboxes - select check boxes [0,3,6]
    const indexes=[0,3,6]
    for(let i of indexes){
          await checkboxes[i].check()
          await expect(checkboxes[i]).toBeChecked()
    }

    //Select the checkbox based on the label
    const weekname='Monday'
    for(const label of days){
        if(label===weekname){
           const checkbox=page.getByLabel(label)
           await checkbox.check()
           await expect(checkbox).toBeChecked()
        }
    }
    await page.waitForTimeout(3000)
})