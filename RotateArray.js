/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3

Output: [5,6,7,1,2,3,4]

Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2

Output: [3,99,-1,-100]

Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Example 3:

Input: nums = [1,2], k = 2
Output: [1,2]
*/

// [1,2], k = 2
var rotate1 = function(nums, k) {
  let lastIndex = nums.length - 1; // 1
  for (let i = 0; i < k; i++) { // 0
    let tempValue = nums[lastIndex]; // 2
    nums.splice(lastIndex); // [1]
    nums.unshift(tempValue); // [2, 1]
  }
  return nums;
};

var rotate2 = function(nums, k) {
  if (nums.length === 2 && k > 1) {
    let rotation = 1;
    while(rotation <= k) {
      nums.reverse();
      rotation++;
    }
    return nums;
  }

  let numsToShift = nums.splice(nums.length - k);
  nums.unshift(...numsToShift);

  return nums;
};

/*
  Input: nums = [1,2,3,4,5,6,7], k = 3
  Output: [5,6,7,1,2,3,4]

  Input: nums = [1,2], k = 2
  Output: [1,2]
*/
var rotate3 = function(nums, k) {
  const tempArray = nums.splice(nums.length - k);
  nums = [...tempArray, ...nums];
  return nums;
};

let nums = [1,2,3,4,5,6,7];
let k = 3;
// console.log(rotate1(nums, k));
// console.log(rotate2(nums, k));
console.log(rotate3(nums, k));

nums = [-1,-100,3,99];
k = 2;
// console.log(rotate1(nums, k));
// console.log(rotate2(nums, k));
// console.log(rotate3(nums, k));

nums = [1,2];
k = 0;
// console.log(rotate1(nums, k));
// console.log(rotate2(nums, k));
// console.log(rotate3(nums, k));

nums = [1,2];
k = 2;
// console.log(rotate1(nums, k));
// console.log(rotate2(nums, k));
// console.log(rotate3(nums, k));
