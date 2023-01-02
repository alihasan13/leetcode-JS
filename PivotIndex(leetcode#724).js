var pivotIndex = function(nums) {
    let leftPivot = 0, rightPivot = 0, sum =0;
    sum= nums.reduce((a,b)=>a+b)
      
     for( let i=0 ; i <nums.length; i++){
         rightPivot = sum - nums[i]- leftPivot
         if(rightPivot==leftPivot) return i
         leftPivot = leftPivot+nums[i]
     }
     return -1
 };


console.log(pivotIndex([2,3,4,5]))