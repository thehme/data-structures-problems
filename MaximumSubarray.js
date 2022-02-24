/*
Given an integer array nums, find the contiguous
subarray (containing at least one number) which has
the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
*/

var maxSubArray = function(nums) {
  // total sum will start at the first element of the array
  // if array of size 1, this value will be returned
  let totalSum = nums[0];
  let currentMax = nums[0];
  
  for(let i = 1; i < nums.length; i++){
      let temp = nums[i] + totalSum;
      if (temp > nums[i]) {
        totalSum = temp;
      } else {
        totalSum = nums[i];
      }

      if (totalSum > currentMax) {
        currentMax = totalSum;
      } else {
        currentMax = currentMax;
      }
  }
  
  return currentMax;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));

nums = [1];
console.log(maxSubArray(nums));

nums = [5,4,-1,7,8]
console.log(maxSubArray(nums));
