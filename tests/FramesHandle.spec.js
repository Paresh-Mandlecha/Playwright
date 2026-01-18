
const {test,expect}=require('@playwright/test')

    test("frames",async({page})=>{
    
        await page.goto('https://ui.vision/demo/webtest/frames/')
/*
        //find total number of frames we have below methods
        const allframes=page.frames()
        console.log("Number Of Frames:",allframes.length)

        //aproach1: using NAME or URL of the frame
       // const var1=page.frame('name');//if name is present use this
        const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
                         //|---locator--|  |--value--|
        await frame1.fill('[name="mytext1"]','Hello');
*/

        //using frame locator--here we have to pass css or xpath here we have to pass locator of frame
       const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
        inputbox.fill('Hello')

        await page.waitForTimeout(5000);

    })