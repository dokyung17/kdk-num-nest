const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => {
expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
expect(lib.avg([-5, 5])).toBe(0);
});
test("prime([7]) should be true", () => {
expect(lib.prime([7])).toBe(true);
});
test("prime([16]) should be false", () => {
expect(lib.prime([16])).toBe(false);
});
test("factorial([7]) should be 5040", () => {
expect(lib.factorial([7])).toBe(5040);
});
test("factorial([17]) should be 355687428096000", () => {
expect(lib.factorial([17])).toBe(355687428096000);
});

