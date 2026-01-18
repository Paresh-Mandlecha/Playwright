const{test,expect, chromium, firefox}=require('@playwright/test')

//only
/*test.only('test1',async({page})=>{
     console.log('this is test 1')
})

//skip
test.skip('test2',async({page})=>{
     console.log('this is test 2')
})

//skip the test based on condition
test('test3',async({page,browserName})=>{
     console.log('this is test 3')
     if(browserName=='chromium'){
        test.skip()
     }
})*/

/*//fixme
test('tes4',async({page})=>{
    test.fixme()
    console.log('this is test4...')
})*/

/*//fail ---here our expectations are test to be failed using fail annotation
test('test5',async({page})=>{
    test.fail() //expected
     console.log('this is test 5')
   //  expect(1).toBe(1);//actual it will get pass
   //whenever both expected and actual get fail test will get passed
     expect(1).toBe(2);//actual it will get fail //final result is my test will get passed 
})*/

/*//test based on condition
test('test6',async({page,browserName})=>{
     console.log('this is test 6')
     if(browserName=='firefox'){
          test.fail()//expected
     }

})*/

//SLOW ANNOTATION 
test('tes7',async({page})=>{//here we set timeout=2000 in config file and test does not get executed so we apply test.slow()
    //APPROACH 1  ////it will take triple time to execute test i.e 2000*3=6000ms
   //  test.slow();
   //APPROACH 2
   test.setTimeout(5000);
    await page.goto('https://demoblaze.com/')
    console.log('this is test7...')
    

})
