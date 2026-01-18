const {test,expect}=require('@playwright/test')

    test('handle radiobutton',async({page})=>{

      await  page.goto('https://testautomationpractice.blogspot.com/')
      
      //check radiobutton for MALE
       await page.locator("//input[@id='male']").check();
     //   await page.check("//input[@id='male']");
        //perform assertion
      await expect(await page.locator("//input[@id='male']")).toBeChecked();
      //another way is|--------inside it wil return true ------| 
      await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();//,male

        //for female radiobutton we are expecting radio button is not checked and should return FALSE
        await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();//female

        await page.waitForTimeout(5000);


    })