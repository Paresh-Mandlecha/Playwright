const {test,expect}=require('@playwright/test');
const { fail } = require('node:assert');

    test('Drop Down',async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');
/*
        //Multiple ways to select option from the Dropdown  
        //---select  by using label-----//
        await page.locator('id=country').selectOption({label:'India'});

        //----select by using visible text----//
        await page.locator('id=country').selectOption('India');

        //----select by Value-----//
        await page.locator('id=country').selectOption({value:'uk'});

        //---select by index----//
        await page.locator('id=country').selectOption({index:1});

        //another way
        await page.selectOption("id=country",'India')
*/
  /*      //ASSERTIONS
    // 1)CHECK TOTAL NUMBER OF OPTIONS IN DROPDOWN
        const options=await page.locator('#country option') //this will return all options inside dropdown
        await expect(options).toHaveCount(10);

        //2)check number of options in dropdown, get options array format we use $$ 
        const options=await page.$$('#country option')
      //  console.log("Number of Options:",options.length)
        await expect(options.length).toBe(10)//here we apply assertions to check options are 10 or not

        //3)check presence of value in the dropdown checking particular option present or not
        //textcontent will return text content of paticular locator, textcontent always return string
        const content=await page.locator('#country').textContent()
        await expect(content.includes('India')).toBeTruthy();

        //4)checking presence of value in dropdown using for loop
         const options=await page.$$('#country option')
         let status=false;
         for(const option of options){
            //print all options in console window
            console.log(await option.textContent())
            let value=await option.textContent();
            if(value.includes('France')){
                status=true;
                break;
            }
         }

         expect(status).toBeTruthy();
*/
    //5)select option from dropdown using loop
      const options=await page.$$('#country option')
         let status=false;
         for(const option of options){
            //print all options in console window
            console.log(await option.textContent())
            let value=await option.textContent();
            if(value.includes('France')){
                await page.selectOption("#country",value)
                break;
            }
         }

         expect(status).toBeTruthy();

        await page.waitForTimeout(5000);

    })