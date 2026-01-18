const {test,expect}=require('@playwright/test')

    test("frames",async({page})=>{

        await page.goto('https://ui.vision/demo/webtest/frames/')
        //parent frame
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    frame3.locator("input[name='mytext3']").fill('Welcome');

    //nested frames
    const childFrames=await frame3.childFrames()
        await childFrames[0].locator('//*[@id="i6"]/div[3]/div').check()
       
        await page.waitForTimeout(5000);









    })