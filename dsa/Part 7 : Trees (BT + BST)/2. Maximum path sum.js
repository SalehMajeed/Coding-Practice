class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxPathDown(node, max) {
  if (node === null) return 0;
  const leftVal = Math.max(0, maxPathDown(node.left, max));
  const rightVal = Math.max(0, maxPathDown(node.right, max));
  max[0] = Math.max(max[0], node.val + leftVal + rightVal);
  return Math.max(leftVal, rightVal) + node.val;
}

function maxPathSum(root) {
  let max = [Number.MIN_SAFE_INTEGER];
  maxPathDown(root, max);
  return max;
}

const root1 = new TreeNode(10);
root1.left = new TreeNode(2);
root1.right = new TreeNode(10);
root1.left.left = new TreeNode(20);
root1.left.right = new TreeNode(1);
root1.right.right = new TreeNode(-25);
root1.right.right.left = new TreeNode(3);
root1.right.right.right = new TreeNode(4);
console.log(maxPathSum(root1)); // 42

const root2 = new TreeNode(-10);
root2.left = new TreeNode(9);
root2.right = new TreeNode(20);
root2.right.left = new TreeNode(15);
root2.right.right = new TreeNode(7);
console.log(maxPathSum(root2)); // 42
