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

Example 4:

Input nums = [-1], k = 2
Output: [-1]

Example 5:
Input nums = [1,2], k = 3

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

var reverseArray = function (nums) {
  let index = 0;
  while (index < (nums.length / 2)) {
    let temp = nums[index];
    let lastIndex = nums.length - (index + 1);
    nums[index] = nums[lastIndex];
    nums[lastIndex] = temp;
    index++;
  }
  return nums;
};

// LEETCODE: ACCEPTED ANSWER
var reverseArray2 = function (nums, startIndex, endIndex) {
  while (startIndex < endIndex) {
    let temp = nums[startIndex];
    nums[startIndex] = nums[endIndex];
    nums[endIndex] = temp;
    endIndex--;
    startIndex++;
  }
  return nums;
};

var rotate4 = function(nums, k) {
  // to account for rotations beyong the size of the array
  // if nums.length = 2, but k = 3, then k should really be 2
  k = k % nums.length;
  // checking if nums.length !=== does not work for some edgecases
  // reverse the left side of index k
  reverseArray2(nums, 0, nums.length - k - 1);
  // reverse from index k to the end of the array
  reverseArray2(nums, nums.length - k, nums.length - 1);
  // reverse entire array
  reverseArray2(nums, 0, nums.length - 1);
  return nums;
}

let nums = [1,2,3,4,5,6,7];
let k = 3;
// console.log(rotate1(nums, k));
// console.log(rotate2(nums, k));
// console.log(rotate3(nums, k));
console.log(rotate4(nums, k));

nums = [-1,-100,3,99];
k = 2;
// console.log(rotate1(nums, k));
// console.log(rotate2(nums, k));
// console.log(rotate3(nums, k));
console.log(rotate4(nums, k));

nums = [1,2];
k = 0;
// console.log(rotate1(nums, k));
// console.log(rotate2(nums, k));
// console.log(rotate3(nums, k));
console.log(rotate4(nums, k));

nums = [1,2];
k = 2;
// console.log(rotate1(nums, k));
// console.log(rotate2(nums, k));
// console.log(rotate3(nums, k));
console.log(rotate4(nums, k));

nums = [-1];
k = 2;
console.log(rotate4(nums, k));

nums = [1,2];
k = 3;
console.log(rotate4(nums, k));
