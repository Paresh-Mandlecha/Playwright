const{test,expect}=require('@playwright/test')

test("Mouse Right Click",async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

    const buttoncopy=await page.locator("//button[normalize-space()='Copy Text']")

    //double click
    await buttoncopy.dblclick()
    const field2=await page.locator('#field2')

    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(2000);
})
