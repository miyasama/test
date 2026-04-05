/**
 * 指定された年がうるう年かどうかを判定する
 * @param {number} year - 判定する年
 * @returns {boolean} うるう年であれば true、そうでなければ false
 */
function isLeapYear(year) {
  if (typeof year !== "number" || !Number.isInteger(year)) {
    throw new TypeError("year must be an integer");
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

module.exports = { isLeapYear };
