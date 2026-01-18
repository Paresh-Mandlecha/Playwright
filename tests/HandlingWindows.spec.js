const {test,expect, chromium}=require('@playwright/test')
/*//syntax
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
*/

//here we are going to create our own page we are not going to use existing page fixture
    test('Handle pages/Windows',async()=>{
    //to create page, first we have to launch browser
    const browser=await chromium.launch()

    //we will create browser context
    const context=await browser.newContext()

    //using context we will create pages
    const page1 =await context.newPage()
    const page2=await context.newPage()

    //see how many pages we have created
    const allpages=context.pages()
    console.log("No of Pages created",allpages.length)

    //here we have created two pages which are independent
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

    })


    //here we are going to create our own page we are not going to us existing page
    test.only('Handle Multiple pages/Windows',async()=>{
    //to create page firsst we to launch browser
    const browser=await chromium.launch()

    //we will create browser context
    const context=await browser.newContext()

    //using context we will create pages
    const page1 =await context.newPage()

    //here we have created two pages which are independent
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagepromise=context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagepromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")


    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    await browser.close()
    })
