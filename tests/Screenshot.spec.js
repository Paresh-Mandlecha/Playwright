const{test,expect}=require('@playwright/test')

test.only("page screenshot",async({page})=>{

    await page.goto('https://www.opencart.com/')  //--reutrn time--//
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'PageScreenshot.png'})
    
})


test("Fullpage screenshot",async({page})=>{
    
    await page.goto('https://www.opencart.com/')  //--return time--//
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.png',fullPage:true})
})


test.only("Element screenshot",async({page})=>{

    await page.goto('https://www.opencart.com/')  //--return time--//
    await page.locator("//div[@class='row hidden-sm']//div[2]").screenshot({path:'tests/screenshots/'+Date.now()+'Element.png'})

    
})