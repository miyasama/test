const { isLeapYear } = require("./leapYear");
const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("isLeapYear", () => {
  it("4で割り切れる年はうるう年", () => {
    assert.strictEqual(isLeapYear(2024), true);
    assert.strictEqual(isLeapYear(2028), true);
  });

  it("100で割り切れる年はうるう年ではない", () => {
    assert.strictEqual(isLeapYear(1900), false);
    assert.strictEqual(isLeapYear(2100), false);
  });

  it("400で割り切れる年はうるう年", () => {
    assert.strictEqual(isLeapYear(2000), true);
    assert.strictEqual(isLeapYear(1600), true);
  });

  it("4で割り切れない年はうるう年ではない", () => {
    assert.strictEqual(isLeapYear(2023), false);
    assert.strictEqual(isLeapYear(2025), false);
  });

  it("整数以外の値はエラーになる", () => {
    assert.throws(() => isLeapYear("2024"), TypeError);
    assert.throws(() => isLeapYear(3.5), TypeError);
    assert.throws(() => isLeapYear(null), TypeError);
  });
});
