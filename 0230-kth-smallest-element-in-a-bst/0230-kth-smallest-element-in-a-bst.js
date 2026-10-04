/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let ans = null , count = 0;
    function solve(curr) {
        
        curr.left && solve(curr.left);
        count++;
        if (count === k) {
            ans = curr.val;
            return
        }
        curr.right && solve(curr.right );
    }
    solve(root );
    return ans;

};