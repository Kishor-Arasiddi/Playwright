/*
Test: Create Booking
Request Type: Post
Request Body: JSON File

*/

import{test, expect} from '@playwright/test';
import fs, { readFileSync } from 'fs';

test('Create Post request using Json File',async({request})=>{

    //Read Data from JSON (Request Body)
    const jsonFile="tests/testData/postRequestBody.json";
    const requestBody=JSON.parse(fs.readFileSync(jsonFile,"utf-8"));


// Send the post request
// request.post('https://restful-booker.herokuapp.com/booking',{data:requestBody});
//Here just gave booking endpoint url is in playwright.config.ts file in "baseurl"
const response=await request.post('/booking',{data:requestBody});

const responseBody=await response.json();  //Extracted response
console.log(responseBody);

//validate the status
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

//Validate response body attributes
expect(responseBody).toHaveProperty("bookingid");
expect(responseBody).toHaveProperty("booking");
expect(responseBody).toHaveProperty("booking.bookingdates");

//Validate values
expect(responseBody.booking.firstname).toBe(requestBody.firstname);
expect(responseBody.booking.lastname).toBe(requestBody.lastname);

expect(responseBody.booking.bookingdates.checkin).toBe(requestBody.bookingdates.checkin);
expect(responseBody.booking.bookingdates.checkout).toBe(requestBody.bookingdates.checkout);

//validate booking details
const booking = responseBody.booking;
expect(booking).toMatchObject({
    "firstname": requestBody.firstname,
    "lastname": requestBody.lastname,
    "totalprice": requestBody.totalprice,
    "depositpaid": requestBody.depositpaid,
    "additionalneeds": requestBody.additionalneeds,
 })

//validate booking dates
expect(booking.bookingdates).toMatchObject({
     "checkin": requestBody.bookingdates.checkin,
        "checkout": requestBody.bookingdates.checkout
})
})