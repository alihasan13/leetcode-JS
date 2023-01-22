var missingNumber = function(nums) {
    let i = 0;
    while (nums.indexOf(i) != -1) {
        i++;
    }
    return i;
};