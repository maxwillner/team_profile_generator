const Engineer = require("../lib/Engineer.js");

test("can set name via constructor argument", () => {
    const testName = "Emily";
    const a = new Engineer(testName);
    expect(a.name).toBe(testName);
});

test("can set id via constructor argument", () => {
    const testId = 4;
    const a = new Engineer("Emily", testId);
    expect (a.id).toBe(testId);
});

test("can set email via constructor argument", () => {
    const testEmail = "test@example.com";
    const a = new Engineer("Emily", 4, testEmail);
    expect (a.email).toBe(testEmail);
});

test("can set github via constructor argument", () => {
    const testGithub = "githubexample";
    const a = new Engineer("Emily", 4, "test@example.com", testGithub);
    expect (a.github).toBe(testGithub);
});

test("can get name via getName()", () => {
    const testName = "Emily";
    const a = new Engineer(testName);
    expect(a.getName()).toBe(testName);
});

test("can get id via getId()", () => {
    const testId = 4;
    const a = new Engineer("Emily", testId);
    expect (a.getId()).toBe(testId);
});

test("can get email via getEmail()", () => {
    const testEmail = "test@example.com";
    const a = new Engineer("Emily", 4, testEmail);
    expect (a.getEmail()).toBe(testEmail);
});

test("can get github via getGithub()", () => {
    const testGithub = "githubexample";
    const a = new Engineer("Emily", 4, "test@example.com", testGithub);
    expect (a.getGithub()).toBe(testGithub);
})

test("can get role via getRole()", () => {
    const testRole = "Engineer";
    const a = new Engineer(testRole);
    expect (a.getRole()).toBe(testRole);
});