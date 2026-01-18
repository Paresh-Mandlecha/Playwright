
const{test,expect}=require('@playwright/test')

//to start writing our test
test('HomePage',async({page})=>{ //aysnc(page) will return promise

 //this command will open url on browser
 // //await keywword is waiting for the promise
  await page.goto('https://demoblaze.com/');
    
  //to capture the title of webpage 
  const PageTitle=await page.title();

  //to print the title of page
  console.log('Page Title is:',PageTitle)

  // validating title using expect function
 await expect(page).toHaveTitle('STORE');

  const pageURl=page.url();
  console.log('Page URL is:',pageURl);
    
 //validating URL
 await expect(page).toHaveURL('https://demoblaze.com/');

  //to close page
 await page.close();

})