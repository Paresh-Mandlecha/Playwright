// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
testDir: './tests',
  /*Run Test files in Parallel*/
  fullyParallel:true,
  /*Fail the build on CI if you accidently left test.only in the source code.*/
  forbidOnly:!!process.env.CI,
  /*Retry on CI only*/
  //retries:process.env.CI ? 2 : 0,
  // retries:1,
  /*Opt out of parallel tests on CI.*/
  workers:1,
  //process.env.CI ? 1 : undefined,
  /*reporter to use.see https://playwright.dev/docs/test-reporters*/
  // reporter: 'html',
   //reporter:[['json',{outputFile:'results.json'}]]
   //reporter:[['junit',{outputFile:'results.xml'}]]
   reporter:[['list'],
             ['html'],
             ['junit',{outputFile:'results.xml'}],
             ['json',{outputFile:'results.json'}]
  ],
  expect: {
    timeout: 5000
  },

  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  /*configure projects for major browsers*/
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
 /*   {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
});
