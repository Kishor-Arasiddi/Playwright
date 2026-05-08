import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  // //Change the timeout globally for all the tests (default = 30000ms->30s)
  // timeout:60000,
  // //Change the timeout globally for assertions (default = 5000ms -> 5s )
  // expect:{timeout:10000},
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Retry on locally */
  //  retries: 3,                               //by Kishor

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  // workers:5,                                  //Added by me
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  //So here when we give different output folder if we execute npx playwright show-report it will open previous folder report.
  //After configuring the folder in playwright.config.ts from then need to execute below command
  //Need run the command as: npx playwright show-report <folder name>
  //Through command prompt also we can execute: npx playwright test --reporter=html

  /* reporter:[['html',{open:'always','outputFolder':'html-report'}],
           ['list'],
           ['line'],
           ['dot'],
           ['junit',{outputFile:'results.xml'}],
           ['json',{outputFile:'results.json'}]
           ],  */

  //Allure Report
  // reporter:'allure-playwright',
  //npx allure generate ./allure-results
  //npx allure generate ./allure-results --clean
  //npx allure open ./allure-report

  //This is tag used in below
  // grep:/@Sanity/,                        // Added by me
  // grepInvert:/@Regression/,             // Added by me
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://restful-booker.herokuapp.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    screenshot:'only-on-failure',             //by kishor
    video:'retain-on-failure'               // by kishor
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
           ...devices['Desktop Chrome'],
            // viewport:null,  //added by me
            ignoreHTTPSErrors:true,   //added by me
            channel:'chrome'   //added by me
       },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
