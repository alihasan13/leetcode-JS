var runningSum = function(nums) {
    let sum = 0 ,_temp = [];

  for ( let i=0; i< nums.length;i++){
      
      sum = sum + nums[i]
      
      _temp.push(sum)
      
  }
    return _temp;
};
nums =[1,2,3,4]
runningSum(nums)