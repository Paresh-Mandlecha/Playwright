const {test,expect}=require('@playwright/test')

    test("Built in Locators",async({page})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
/*
        //1)getByRole for username and password and login button
        await page.getByRole('textbox',{name:'username'}).fill('Admin');
        await page.getByRole('textbox',{name:'password'}).fill('admin123');
        await page.getByRole('button',{type:'submit'}).click();

        //for link purpose use getbyrole
       // await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();

        //2)getByText
        await page.getByText('PIM').click();
        await expect(page.getByText('PIM')).toBeVisible();
        
        //3)getByPlaceHolder
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button',{type:'submit'}).click();
*/
        //4)getByaltText
        const logo=await page.getByAltText('company-branding');
        await expect(logo).toBeVisible();

        //5)getBytitle
       const title=await page.getByTitle('OrangeHRM');
      //  await expect(title).toBeVisible();




    })