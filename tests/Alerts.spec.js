
const{test,expect}=require('@playwright/test')

    test.skip('Alert with OK',async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        //before going to handle alert first we have to write below code 
        //dialog window handler  //enable alert handling
        page.on('dialog',async dialog=>{
            //verify the alert type
            expect(dialog.type()).toContain('alert')
            //validate message on alert pop up
            expect(dialog.message()).toContain('I am an alert box!')
             await dialog.accept();
        })

        await page.click("//button[@id='alertBtn']")

        await page.waitForTimeout(5000);
    })


    //2)Confirmation Alert
    test.skip('Confirmation Dialog alert',async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');

        //before going to handle alert first we have to write below code 
        //dialog window handler  //enable alert handling
        page.on('dialog',async dialog=>{
            //verify the type of alert
            expect(dialog.type()).toContain('confirm')
            //verify the message
            expect(dialog.message()).toContain('Press a button!')
             await dialog.accept();
          // await dialog.dismiss();
        })

        await page.click("//button[@id='confirmBtn']");
        await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');


        await page.waitForTimeout(5000);
    })


    //3)Prompt Alert
    test('Prompt Dialog alert',async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');

         //dialog window handler  //enable alert handling
        page.on('dialog',async dialog=>{
            //verify type of alert
            expect(dialog.type()).toContain('prompt')
            //verify the message
            expect(dialog.message()).toContain('Please enter your name:')
            //verify the default value which is there in input box
            expect(dialog.defaultValue()).toContain('Harry Potter') 
            //close the window by providing value in the input box
             await dialog.accept('john');
          // await dialog.dismiss();
        })

        await page.click("//button[@id='promptBtn']");
        await expect(page.locator("//p[@id='demo']")).toHaveText('Hello john! How are you today?');


        await page.waitForTimeout(5000);
    })