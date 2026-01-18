const {test,expect}=require('@playwright/test');

test(" Drag And Drop",async({page})=>{

    await page.goto('https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE?editors=0010')

   const romesource=await page.locator('#box6')
   const italytarget=await page.locator('#box106')

   
   await romesource.dragTo(italytarget)

})