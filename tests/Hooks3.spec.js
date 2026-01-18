const{test,expect}=require('@playwright/test')
//create a variable
let page;
test.beforeAll(async({browser})=>{
    //create common page fixture to all pages
    page=await browser.newPage();
    await page.goto('https://demoblaze.com/')    
    //LOGIN
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Proper')
    await page.locator('#loginpassword').fill('Proper@51')
    await page.locator("button[onclick='logIn()']").click()

});

test.afterAll(async()=>{

 //LOGOUT
    await page.locator('#logout2').click();

})

test("Home Page Test",async()=>{

     //HOMEPAGE

    //capture all rhe elements they will be in the form of an array
    const products=await page.$$('.hrefch');
    await expect(products).toHaveLength(9);
    
   
});

test("Add to Cart",async()=>{
    
    //ADD TO CART.
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    
    page.on('dialog',async dialog =>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();

    })


})