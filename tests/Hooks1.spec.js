/*In Playwright, hooks are functions that run automatically at specific points in the test lifecycle 
(e.g., before or after each test or all tests in a file) to manage setup and teardown logic*/

const{test,expect}=require('@playwright/test')

test("Home Page Test",async({page})=>{

    await page.goto('https://demoblaze.com/')    
    //LOGIN
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Proper')
    await page.locator('#loginpassword').fill('Proper@51')
    await page.locator("button[onclick='logIn()']").click()

    //HOMEPAGE
    //capture all rhe elements they will be in the form of an array
    const products=await page.$$('.hrefch')
    await expect(products).toHaveLength(9);
    
    //LOGOUT
    await page.locator('#logout2').click();
})


test("Add to Cart",async({page})=>{

    //LOGIN
     await page.goto('https://demoblaze.com/')    
    //LOGIN
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Proper')
    await page.locator('#loginpassword').fill('Proper@51')
    await page.locator("button[onclick='logIn()']").click()


    //ADD TO CART.
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog',async dialog =>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()

    })


    //LOGOUT
    await page.locator('#logout2').click();

    
})