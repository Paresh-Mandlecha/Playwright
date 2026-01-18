
import {test,expect} from '@playwright/test'
import { link } from 'node:fs';

    test('LocatemultipleElements',async({page})=>{

        await page.goto('https://demoblaze.com/index.html')
        
        //to locate multiple links on webpage call below method $$
        const links=await page.$$('a');
        
        //to get text of every link need to write for each loop
        for(const link of links){ //instead of ':' we have 'of' in javascript

            //textcontent() will return the text of the element
            const linktext=await link.textContent();
            console.log(linktext);
        }






    })
