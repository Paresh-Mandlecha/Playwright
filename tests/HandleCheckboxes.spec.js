
//Handle Checkboxes
const {test,expect}=require('@playwright/test')

    test("Handle Checkboxes",async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')
        //single checkbox or specific checkbox
        await page.locator("//input[@id='monday']").check();
        //----or-----//
      //  await page("//input[@id='monday']").check();

      //assertions
     expect(await page.locator("//input[@id='monday']")).toBeChecked();

        //handle multiple checkboxes
        //capture the locators of those checkboxes
        //create one array
        const checkboxelocators=[
                            "//input[@id='monday']",
                            "//input[@id='tuesday']",
                            "//input[@id='saturday']",
        ];
        //select multiple checkboxes
        for(const locator of checkboxelocators){
           await page.locator(locator).check();
        }

        await page.waitForTimeout(5000);

        //unselect multiple checkboxes which are already selected
        for(const locator of checkboxelocators){
            if(await page.locator(locator).isChecked())
           await page.locator(locator).uncheck();
        }
     await page.waitForTimeout(5000);




    })
