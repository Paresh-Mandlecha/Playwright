const{test,expect}=require('@playwright/test')

test("Home Page Test",async({page})=>{

    await page.goto('https://demo.opencart.com/')

    const desktops=await page.locator("//a[normalize-space()='Desktops']")
    const mac1= await page.locator("//a[normalize-space()='Mac (1)']")

    //mouse hover 
    await desktops.hover();
    await mac1.hover();

    await page.waitForTimeout(2000);
})