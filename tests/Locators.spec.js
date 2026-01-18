//const {test,expect}=require('@playwright/test')
import{test,expect} from '@playwright/test'

test('Locators',async({page})=>{

   await page.goto('https://demoblaze.com/')
   
   //click on login button -property as a locator here property means direct locators such as id,name
   //following are two different approches to locate the elements
    await page.locator('id=login2').click()
  //   await page.click('id=login2')

     //locate  username using css
   //  await page.locator('#loginusername').fill("pavanol")
   //  await page.fill('#loginusername')
   //  await page.type('#loginusername')
     
   //locate  username directly by id
   // await page.locator('id=loginusername').fill('Proper')
     await page.fill('id=loginusername','Proper')

     //locate password
    // await page.locator('id=loginpassword').fill('Proper@51') 
     await page.type('id=loginpassword','Proper@51')

    //click on login button using xpath
    await page.click("//button[text()='Log in']")

    //verifying logout button visible on web page 
    const logoutlink= await page.locator("//a[text()='Log out']")

    //this will verify logout link is present on the webpage
    await expect(logoutlink).toBeVisible();

    await page.close()

})