const{test,expect}=require('@playwright/test')

test('AutoSuggest dropdown',async({page})=>{

    await page.goto('https://www.redbus.in/');

    await page.getByLabel('From').fill('Delhi');
    







})

    

   



