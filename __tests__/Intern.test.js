const Intern = require("../lib/Intern.js");

test("can set name via constructor argument", () => {
    const testName = "Jack";
    const a = new Intern(testName);
    expect(a.name).toBe(testName);
});

test("can set id via constructor argument", () => {
    const testId = 5;
    const a = new Intern("Jack", testId);
    expect (a.id).toBe(testId);
});

test("can set email via constructor argument", () => {
    const testEmail = "test@example.com";
    const a = new Intern("Jack", 5, testEmail);
    expect (a.email).toBe(testEmail);
});

test("can set school via constructor argument", () => {
    const testSchool = "TestUniversity";
    const a = new Intern("Jack", 5, "test@example.com", testSchool);
    expect (a.school).toBe(testSchool);
});

test("can get name via getName()", () => {
    const testName = "Jack";
    const a = new Intern(testName);
    expect(a.getName()).toBe(testName);
});

test("can get id via getId()", () => {
    const testId = 5;
    const a = new Intern("Jack", testId);
    expect (a.getId()).toBe(testId);
});

test("can get email via getEmail()", () => {
    const testEmail = "test@example.com";
    const a = new Intern("Jack", 5, testEmail);
    expect (a.getEmail()).toBe(testEmail);
});

test("can get school via getSchool()", () => {
    const testSchool = "TestUniversity";
    const a = new Intern("Jack", 5, "test@example.com", testSchool);
    expect (a.getSchool()).toBe(testSchool);
})

test("can get role via getRole()", () => {
    const testRole = "Intern";
    const a = new Intern(testRole);
    expect (a.getRole()).toBe(testRole);
});