const {test,expect}=require('@playwright/test')

test('Mutliselect dropdown',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//select mutiple options from multi select dropdown
//await page.selectOption('#colors',['Blue','Red','Yellow'])

//Assertions
//1)check number of options in dropdown
const options=await page.locator('#colors option')
await expect(options).toHaveCount(5);

//2)by using javascript array
const option1=await page.$$('#colors option')
console.log("Number of options :",option1.length)
await expect(option1.length).toBe(5);

//3)presence of particular option in dropdown
const option2=await page.locator('#colors').textContent();
await expect(option2.includes('Blue')).toBeTruthy();




await page.waitForTimeout(2000);


})