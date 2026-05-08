/*
Test: Create Booking
Request Type: Post
Request Body: Static

*/

import{test, expect} from '@playwright/test';
import { request } from 'http';
import { emitWarning } from 'process';

test('Create Post request using static body',async({request})=>{

    //Request Body
    const requestBody={
    "firstname": "Virat",
    "lastname": "Kohli",
    "totalprice": 1000,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-03-30",
        "checkout": "2026-04-06"
    }
}

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
expect(responseBody.booking.firstname).toBe('Virat');
expect(responseBody.booking.lastname).toBe('Kohli');

expect(responseBody.booking.bookingdates.checkin).toBe('2026-03-30');
expect(responseBody.booking.bookingdates.checkout).toBe('2026-04-06');

//validate booking details
const booking = responseBody.booking;
expect(booking).toMatchObject({
    "firstname": "Virat",
    "lastname": "Kohli",
    "totalprice": 1000,
    "depositpaid": true,
 })

//validate booking dates
expect(booking.bookingdates).toMatchObject({
     "checkin": "2026-03-30",
        "checkout": "2026-04-06"
})
})