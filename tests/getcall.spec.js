import { test, expect } from '@playwright/test';

test('GET API',async({request})=>{
    
   const response=await request.get("https://jsonplaceholder.typicode.com/posts/1")
  
   const responsebody=await response.body();

  //get status code
  const  responsestatus=response.status();
  //verify status code
  expect(responsestatus).toBe(200);
  //console.log(responsestatus);

  const responsestatustext=response.statusText();
  //verify status text
  expect(responsestatustext).toBe("OK")
  //console.log(responsestatustext);
  
  //get reponse as json body
  const responsejson=await response.json();
  expect(responsejson).toHaveProperty("userId",1)
  //console.log(responsejson);

    //get response as header
    const reponseheaders=response.headers();
    //console.log(reponseheaders);

    //get reponse in header as Array
    const responseheadersasarray=response.headersArray();
    //console.log(responseheadersasarray);

    expect(response.ok()).toBeTruthy();
    
    //verify title
    expect(responsejson).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
})