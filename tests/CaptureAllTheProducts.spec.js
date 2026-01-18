import{test,expect} from '@playwright/test'

test('CaptureAllTheProducts',async({page})=>{

    await page.goto('https://demoblaze.com/index.html')

    
    const products=await page.$$("//div[@id='tbodyid']//div/h4/a")

    for(const product of products){
         const productname=await product.textContent();
            console.log(productname);
        }



})