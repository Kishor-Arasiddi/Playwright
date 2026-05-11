import{test, expect} from '@playwright/test';
import{faker} from '@faker-js/faker';
import { log } from 'console';
import { request } from 'http';

test('Get booking details by ID - path parameter', async({request})=>{

    const bookingID=12;
    //Sending Get request
    const response=await request.get(`/booking/${bookingID}`);
    //parse the response and print
    const responeBody=await response.json();
    console.log(responeBody);
    
    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Get booking details by Name - query parameter', async({request})=>{

    // const firstname=faker.person.firstName();
    // const lastname= faker.person.lastName();

    const firstname='Jim';
    const lastname='Brown';

    //Sending get request along with query parameter
    //Here params is only for query paramenters
    const response = await request.get('/booking',{params:{firstname,lastname}});
    const responseBody=await response.json();
    console.log(responseBody);
    
    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //check response should not be empty
    expect(responseBody.length).toBeGreaterThan(0);

    for(const item of responseBody){
        expect(item).toHaveProperty('bookingid');
        expect(typeof item.bookingid).toBe('number');
        expect(item.bookingid).toBeGreaterThan(0);
    }
});