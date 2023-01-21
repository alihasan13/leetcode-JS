var singleNumber = function(nums) {
     let results = 0;
  for (let i = 0; i < nums.length; i++) {
    results ^= nums[i];
  }
  return results;
};