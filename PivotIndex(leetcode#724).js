function pivotIndex(nums) {
    let totalSum = 0
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    
    let leftSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - nums[i] - leftSum
        if (rightSum === leftSum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
};


console.log(pivotIndex([2,3,4,5]))