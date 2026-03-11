import{test,expect} from '@playwright/test'
import { beforeEach } from 'node:test';

test.beforeAll('BeforeAll',async()=>{
    console.log("Executed Before all tests");
})

test.afterAll('AfterAll',async()=>{
    console.log("Executed after all tests");
})

test.beforeEach('BeforeEach',async()=>{
    console.log("Executed Before the each tests");
})

test.afterEach('AfterEach',async()=>{
    console.log("Executed after the each tests");
})

test("Test 1",async()=>{
    console.log("Test1 is Executed");
})

test("Test 2",async()=>{
    console.log("Test2 is Executed");
})

test("Test 3",async()=>{
    console.log("Test3 is Executed");
})

test("Test 4",async()=>{
    console.log("Test4 is Executed");
})