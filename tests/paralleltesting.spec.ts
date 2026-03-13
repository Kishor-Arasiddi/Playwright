import{test,expect} from '@playwright/test'

//It will execute in serial order
// test.describe.configure({mode:'serial'})

//It will execute in parallel mode
test.describe.configure({mode:'parallel'})

test("Test 1",async()=>{
    console.log("This is Test 1");
})

test("Test 2",async()=>{
    console.log("This is Test 2");
})

test("Test 3",async()=>{
    console.log("This is Test 3");
})

test("Test 4",async()=>{
    console.log("This is Test 4");
})

test("Test 5",async()=>{
    console.log("This is Test 5");
})