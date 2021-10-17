const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee.js");

test("can set name via constructor argument", () => {
    const testName = "Danny";
    const a = new Employee(testName);
    expect(a.name).toBe(testName);
});

test("can set id via constructor argument", () => {
    const testId = 3;
    const a = new Employee("Danny", testId);
    expect (a.id).toBe(testId);
});

test("can set email via constructor argument", () => {
    const testEmail = "test@example.com";
    const a = new Employee("Danny", 3, testEmail);
    expect (a.email).toBe(testEmail);
});

test("can get name via getName()", () => {
    const testName = "Danny";
    const a = new Employee(testName);
    expect(a.getName()).toBe(testName);
});

test("can get id via getId()", () => {
    const testId = 3;
    const a = new Employee("Danny", testId);
    expect (a.getId()).toBe(testId);
});

test("can get email via getEmail()", () => {
    const testEmail = "test@example.com";
    const a = new Employee("Danny", 3, testEmail);
    expect (a.getEmail()).toBe(testEmail);
});

test("can get role via getRole()", () => {
    const testRole = "Employee";
    const a = new Employee(testRole);
    expect (a.getRole()).toBe(testRole);
});