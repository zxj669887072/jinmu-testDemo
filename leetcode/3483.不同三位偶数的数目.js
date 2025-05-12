/*
 * @lc app=leetcode.cn id=3483 lang=javascript
 *
 * [3483] 不同三位偶数的数目
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  /* code-1 
  思路：找规律+数学公式
  解题过程：
  给你一个数字数组 digits，你需要从中选择三个数字组成一个三位偶数，你的任务是求出 不同 三位偶数的数量。
  注意：每个数字在三位偶数中都只能使用 一次 ，并且 不能 有前导零。
  以[1,2,3,4]为例
  由于每个偶数只能出现一次，所以可以使用set把使用过的偶数存起来，只有没有使用过的偶数组成的数字数量才需要相加

  1.接下去思考，目前有四个数字，已经被使用了一个数字，那么剩下三个数字 两两组合，
  但因为有先后顺序关系（这里先不考虑前导0和重复数字），所以他可以组成的数字数量的公式是n * （n-1）

  2.接下去考虑重复数字，我们已经知道如果不重复的数字的两两组合数量为n * （n-1） ，那么我们可以相让所有数字不重复，
  使用set ，那么重复的数字也可以和重复的数字组合成一个数字，所以还需要加上 重复的数字的数目 ，
  此时公式就变成了n*(n-1) + k 【n是使用set后不重复的数据，k是重复的数字个数（例如2,2,3,4,4,5）n就是4 ，k就是2】

  3.接下去去考虑前导0 ，若果存在数字0 ， 那边总个数就少了除0以外存在的个数 ，也就是n-1(数学规律)

  4.还需要考虑，0是重复的数字的情况，所以需要再第2步的时候排除0，才能保证结果正确

  5.【特殊情况，所有数字相同】最后考虑当剩下数字都相同的时候，也就是set长度为1的时候，
  结果只有一种情况，只有一个数字，且这个数字不能为0，所以结果为1
  */

  /* let num = 0;
  let len = digits.length;
  let arr = new Set();

  for (let i = 0; i < len; i++) {
    // 如果是偶数并且没有使用过
    if (digits[i] % 2 === 0 && !arr.has(digits[i])) {
      console.log("偶数", digits[i]);
      arr.add(digits[i]);

      // let newArr = digits.splice(i, 1); // 删除当前数字,获取剩余数字
      let newArr = [...digits.slice(0, i), ...digits.slice(i + 1)]; // 删除当前数字,获取剩余数字
      console.log("newArr", newArr);      

      // 统计数字出现的次数
      let obj = {};
      for (let j = 0; j < newArr.length; j++) {
        obj[newArr[j]] = obj[newArr[j]] ? obj[newArr[j]] + 1 : 1;
      }
      console.log("obj", obj);

      // 记录重复的数字
      let numlist = [];
      Object.keys(obj).forEach((item) => {
        if (obj[item] > 1 && item !== "0") {
          numlist.push(item);
        }
      });
      console.log("numlist", numlist);

      let newArrSet = new Set(newArr);
      let size = newArrSet.size; // 剩余不重复数字的个数
      console.log("size", size);

      if (size == 1) {
        // 只剩1个数字
        let onlyNumber = digits[i === len-1 ? 0 : i+1];
        if (onlyNumber !== 0) num += 1;
      } else {
        // 多余1个数字时，计算排列组合  注意去除0
        let isZero = newArrSet.has(0) ? 1 : 0;
        console.log("isZero", isZero, newArrSet.has(0));
        console.log("calc", size * (size - 1), -isZero * (size - 1), numlist.length);
        num += size * (size - 1) - isZero * (size - 1) + numlist.length;
      }
    }
  }

  return num; */

  let num = 0;
  let len = digits.length;
  let obj1 = {}, // 记录偶数是否使用过
    obj2 = {}; // 记录数字出现的次数

  for (let i = 0; i < len; i++) {
    // 如果是偶数并且没有使用过
    if (digits[i] % 2 === 0 && obj1[digits[i]] === undefined) {
      obj1[digits[i]] = 1;

      // 统计所有数字出现的次数
      if (Object.keys(obj2).length === 0) {
        for (let j = 0; j < digits.length; j++) {
          obj2[digits[j]] = obj2[digits[j]] ? obj2[digits[j]] + 1 : 1;
        }
      }

      // 除当前数字的统计
      let obj3 = { ...obj2 };
      obj3[digits[i]] -= 1;
      if (obj3[digits[i]] === 0) {
        delete obj3[digits[i]];
      }

      let newArrSet = new Set(Object.keys(obj3));
      let size = newArrSet.size; // 剩余不重复数字的个数

      if (size == 1) {
        // 只剩1个数字
        let onlyNumber = digits[i === len - 1 ? 0 : i + 1];
        if (onlyNumber !== 0) num += 1;
      } else {
        // 记录非0重复的数字
        let numlist = Object.keys(obj3).filter((n) => obj3[n] > 1 && n !== "0");

        // 多于1个数字时，计算排列组合  注意去除0
        let isZero = newArrSet.has("0") ? 1 : 0;
        num += size * (size - 1) - isZero * (size - 1) + numlist.length;
      }
    }
  }

  return num;
};
// @lc code=end

console.log(totalNumbers([1, 2, 3, 4]), "\n\n"); // 12
console.log(totalNumbers([0, 2, 2]), "\n\n"); // 2
console.log(totalNumbers([6, 6, 6]), "\n\n"); // 1
console.log(totalNumbers([3, 6, 3]), "\n\n"); // 1
console.log(totalNumbers([3, 1, 5]), "\n\n"); // 0
console.log(totalNumbers([0, 1, 5, 0, 1]), "\n\n"); // 150,510,100,500,110
