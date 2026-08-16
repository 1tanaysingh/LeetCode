/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let st = 0, en = nums.length - 1;
    if (nums[st] <= nums[en]) {
        return nums[0];
    }


    while (st <= en) {
        let mid = Math.floor(st + (en - st) / 2);

        if (nums[0] <= nums[mid]) {
            st = mid + 1;
        }
        else {
            en = mid - 1;

        }
    }


    return nums[st];


};