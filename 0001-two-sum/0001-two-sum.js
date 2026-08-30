  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mymap = new Map();
    mymap.set(nums[0],0);
    for(let i =1;i<nums.length;i++){
        let need = target-nums[i];
        if(mymap.has(need)){
            let ans1 = mymap.get(need)
            return [ans1,i];
        }
        mymap.set(nums[i],i);
    }
};
