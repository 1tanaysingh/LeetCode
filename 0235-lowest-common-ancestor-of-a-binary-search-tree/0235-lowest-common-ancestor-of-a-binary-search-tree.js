/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ans = null;
    let solve = (curr) => {
       
       if (p.val < curr.val && q.val < curr.val) {
           
            solve(curr.left);
        }
       else if(p.val > curr.val && q.val > curr.val){
           
            solve(curr.right);
        }
         else {
            ans = curr;
            return ;
        }

    }
    solve(root);
    return ans;

};