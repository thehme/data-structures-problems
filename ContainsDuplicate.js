/*
Given an integer array nums, return true if any
value appears at least twice in the array, and
return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

var containsDuplicate = function(nums) {
  let hasDuplicates = false;
  const numCountMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!numCountMap.hasOwnProperty(nums[i])) {
      numCountMap[nums[i]] = 1;
    } else {
      hasDuplicates = true;
      break;
    }
  }
  return hasDuplicates;
};

// O(n) time complexity, because we have to traverse the entire array
// O(n) space complexity, since we are creating a hash map

let nums = [1,2,3,1];
console.log(containsDuplicate(nums));

nums = [1,2,3,4];
console.log(containsDuplicate(nums));

nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));