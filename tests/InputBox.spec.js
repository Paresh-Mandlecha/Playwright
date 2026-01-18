//How to Handle Input Box And Radio Buttons

const {test,expect}=require('@playwright/test')

    test('handle inputBox',async({page})=>{

      await  page.goto('https://testautomationpractice.blogspot.com/')
        //first we will check inputbox is visible or not
      await expect(await page.locator("//input[@id='name']")).toBeVisible();
        //we will check it is empty or not
      await expect(await page.locator("//input[@id='name']")).toBeEmpty();
        //editable or not
      await expect(await page.locator("//input[@id='name']")).toBeEditable();
        //data is enabled or not
      await expect(await page.locator("//input[@id='name']")).toBeEnabled();

        //Input Box-FirstName
        await page.locator("//input[@id='name']").fill("john")

        await page.waitForTimeout(5000);


    })