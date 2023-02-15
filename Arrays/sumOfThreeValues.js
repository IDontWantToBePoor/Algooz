// We want to see if there are any three numbers in a given array that their sum equals to a given target value.

function sumOfThreeEqualsTarget(nums, target) {
    let len = nums.length;
    let found = false;
    
    for(let i = 0; i <= len - 1; i++) {
        for(let j = i +1; j <= len - 1; j++) {
            for(let k = j + 1; k <= len -1; k++) {
                if(nums[i] + nums[j] + nums[k] === target) {
                    found = true;
                    break;
                }
            }
        }
    }

    return found;
}