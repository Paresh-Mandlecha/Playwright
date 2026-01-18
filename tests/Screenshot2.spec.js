const{test,expect}=require('@playwright/test')

test("page screenshot",async({page})=>{

  await page.goto('https://demoblaze.com/index.html')  

  await page.getByRole('link', { name: 'Log in' }).click();
 
  await page.locator('#loginusername').fill('Proper');

  await page.locator('#loginpassword').fill('Proper@51');
  
  await page.getByRole('button', { name: 'Log in' }).click();

})