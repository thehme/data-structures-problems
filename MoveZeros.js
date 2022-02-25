/*
Given an integer array nums, move all 0's to the end of
it while maintaining the relative order of the non-zero
elements.

Note that you must do this in-place without making a copy
of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
*/


// O(n) time complexity
// O(1) space complexity
var moveZeroes = function(nums) {
  let currentIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const temp = nums[currentIndex];
    if (nums[i] !== 0) {
      nums[currentIndex] = nums[i];
      nums[i] = temp;
      currentIndex++;
    }
  }
  return nums;
};

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));

nums = [0];
console.log(moveZeroes(nums));