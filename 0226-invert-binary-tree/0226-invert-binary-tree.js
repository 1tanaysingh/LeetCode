var invertTree = function(root) {
    if (!root) return null;

    let q = [root];

    while (q.length) {
        let node = q.shift();

        let left1 = node.left;
        let right1 = node.right;

        let temp = left1;
        left1 = right1;
        right1 = temp;

        node.left = left1;
        node.right = right1;

        if (left1) q.push(left1);
        if (right1) q.push(right1);
    }

    return root;
};