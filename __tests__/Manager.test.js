const Manager = require("../lib/Manager.js");

test("can set name via constructor argument", () => {
    const testName = "Zoey";
    const a = new Manager(testName);
    expect(a.name).toBe(testName);
});

test("can set id via constructor argument", () => {
    const testId = 6;
    const a = new Manager("Zoey", testId);
    expect (a.id).toBe(testId);
});

test("can set email via constructor argument", () => {
    const testEmail = "test@example.com";
    const a = new Manager("Zoey", 6, testEmail);
    expect (a.email).toBe(testEmail);
});

test("can set office number via constructor argument", () => {
    const testOfficeNumber = 8675309;
    const a = new Manager("Zoey", 6, "test@example.com", testOfficeNumber);
    expect (a.officeNumber).toBe(testOfficeNumber);
});

test("can get name via getName()", () => {
    const testName = "Zoey";
    const a = new Manager(testName);
    expect(a.getName()).toBe(testName);
});

test("can get id via getId()", () => {
    const testId = 6;
    const a = new Manager("Zoey", testId);
    expect (a.getId()).toBe(testId);
});

test("can get email via getEmail()", () => {
    const testEmail = "test@example.com";
    const a = new Manager("Zoey", 6, testEmail);
    expect (a.getEmail()).toBe(testEmail);
});

test("can get office number via getofficeNumber()", () => {
    const testOfficeNumber = 8675309;
    const a = new Manager("Zoey", 6, "test@example.com", testOfficeNumber);
    expect (a.getofficeNumber()).toBe(testOfficeNumber);
})

test("can get role via getRole()", () => {
    const testRole = "Manager";
    const a = new Manager(testRole);
    expect (a.getRole()).toBe(testRole);
});