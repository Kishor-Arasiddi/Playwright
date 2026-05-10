/*
Test: Create Booking
Request Type: Post
Request Body: Random/Dynamic Data

Prerequisites:
Insatall faker library for generating dynamic data
npm install faker-js/faker

Install luxon is library for working with dates and times in javascript
npm install luxon
*/

import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";


test("Create Post request randomly/dynamically", async ({ request }) => {
  //Generate Random Data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const totalPrice = faker.number.int({ min: 100, max: 3000 });
  const depositPaid = faker.datatype.boolean();
  const checkin = DateTime.now().toFormat("yyyy-MM-dd");
  const checkout = DateTime.now().plus({ days: 1 }).toFormat("yyyy-MM-dd");

  //Request Body
  const requestBody = {
    firstname: firstName,
    lastname: lastName,
    totalprice: totalPrice,
    depositpaid: depositPaid,
    bookingdates: {
      checkin: checkin,
      checkout: checkout,
    },
  };

  // Send the post request
  // request.post('https://restful-booker.herokuapp.com/booking',{data:requestBody});
  //Here just gave booking endpoint url is in playwright.config.ts file in "baseurl"
  const response = await request.post("/booking", { data: requestBody });

  const responseBody = await response.json(); //Extracted response
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

  expect(responseBody.booking.bookingdates.checkin).toBe(
    requestBody.bookingdates.checkin,
  );
  expect(responseBody.booking.bookingdates.checkout).toBe(
    requestBody.bookingdates.checkout,
  );

  //validate booking details
  const booking = responseBody.booking;
  expect(booking).toMatchObject({
    firstname: requestBody.firstname,
    lastname: requestBody.lastname,
    totalprice: requestBody.totalprice,
    depositpaid: requestBody.depositpaid,
  });

  //validate booking dates
  expect(booking.bookingdates).toMatchObject({
    checkin: requestBody.bookingdates.checkin,
    checkout: requestBody.bookingdates.checkout,
  });
});
