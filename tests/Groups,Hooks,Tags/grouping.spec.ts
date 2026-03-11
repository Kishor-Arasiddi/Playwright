import { test, expect } from "@playwright/test";
import { log } from "console";

test.describe("Group 1", async () => {
  test("Test 1", async () => {
    console.log("This is test1");
  });

  test("Test 2", async () => {
    console.log("This is test2");
  });
});

test.describe("Group 2", async () => {
  test("Test 3", async () => {
    console.log("This is test3");
  });

  test("Test 4", async () => {
    console.log("This is test4");
  });
});
