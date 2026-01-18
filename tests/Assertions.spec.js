
const{test,expect}=require('@playwright/test')

test('AssertionsTest',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //1)expect page().toHaveURl here we validate URL
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

   //2)expect(page).toHaveTitle
   await expect(page).toHaveTitle('nopCommerce demo store. Register')

   //3)expect(locator).toBeVisible ()   Element is visible or not 
    const logoelement=await page.locator("//div[@class='header-logo']")
    await expect(logoelement).toBeVisible();

    //4)expect(locator).toBeEnabled()
    const searchstorebox=await page.locator("//input[@id='small-searchterms']")
   await expect(searchstorebox).toBeEnabled();

   //5)expect(locator).toBeChecked() radiobuttons are checked or not 
   const maleradiobutton=await page.locator('id=gender-male')
   await maleradiobutton.click();  //select male radiobutton
   await expect(maleradiobutton).toBeChecked()

   //check for already checked newsletter checkbox
   const newslettercheckbox=await page.locator('id=NewsLetterSubscriptions_0__IsActive')
    await expect(newslettercheckbox).toBeChecked();

    //6)expect(locator).toHaveAttribute() checks particular element contains attribute or not 
    const registerbutton=await page.locator('id=register-button')//locate element
    await expect(registerbutton).toHaveAttribute('type','submit')//here we check submit having type as attribute or not

    //7)expect(locator).toHaveText() it verifies exact element matches text or not which we gave
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    //8)expect(locator).toContainsText() it verifies partial textmatches or not
   await expect(await page.locator('.page-title h1')).toContainText('Reg')


    //9)expect(locator).toHaveValue(value) we can check input box having value or not
    const emailInput=await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')


    //10)//9)expect(locator).toHaveCount() it is specially used in dropdowns it is important list of elements length


})