/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let no1 = l1, no2 = l2, carry = 0, sum = 0;
    let ans = new ListNode();
    let mainans = ans;
    while (no1 && no2) {
       
        sum = no1.val + no2.val + carry;
        let add = sum % 10;
        carry = Math.floor(sum / 10);
        let nex = new ListNode(add);
        ans.next = nex;
        ans= ans.next
        no1 = no1.next;
        no2 = no2.next;
    }
    while (no1) {
       
        sum = no1.val + carry;
        let add = sum % 10;
        carry = Math.floor(sum / 10);
        let nex = new ListNode(add);
        ans.next = nex
        ans = ans.next;
        no1 = no1.next;

    }
    while (no2) {
       
        sum = no2.val + carry;
        let add = sum % 10;
        carry = Math.floor(sum / 10);
        let nex = new ListNode(add);
        ans.next = nex
        ans = ans.next;
        no2 = no2.next;

    }
    if (carry) {
        let nex = new ListNode(carry);
        ans.next = nex;
        ans = ans.next;
    }
    return mainans.next;
};