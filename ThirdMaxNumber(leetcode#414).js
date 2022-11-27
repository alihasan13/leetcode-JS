let thirdMax = function(nums) {
    const removeDuplicate = [...new Set(nums)]
  removeDuplicate.sort((a, b) => b - a)
  return removeDuplicate[2] !== undefined ? removeDuplicate[2] : removeDuplicate[0]
    
};
console.log(thirdMax)