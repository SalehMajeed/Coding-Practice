class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function height(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(height(node.left), height(node.right));
}

function diameterOfBinaryTree(root) {
  if (root === null) return 0;
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  return Math.max(
    leftHeight + rightHeight,
    Math.max(leftDiameter, rightDiameter)
  );
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
console.log(diameterOfBinaryTree(root1)); // 3

const root2 = new TreeNode(1);
console.log(diameterOfBinaryTree(root2)); // 0

const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.left.left = new TreeNode(3);
root3.left.left.left = new TreeNode(4);
root3.left.left.left.left = new TreeNode(5);
console.log(diameterOfBinaryTree(root3)); // 4

const root4 = new TreeNode(1);
root4.left = new TreeNode(2);
root4.right = new TreeNode(3);
root4.left.left = new TreeNode(4);
root4.left.right = new TreeNode(5);
root4.right.left = new TreeNode(6);
root4.right.right = new TreeNode(7);
console.log(diameterOfBinaryTree(root4)); // 4

const root5 = new TreeNode(1);
root5.left = new TreeNode(2);
root5.left.left = new TreeNode(3);
root5.left.left.left = new TreeNode(4);
root5.left.left.left.left = new TreeNode(5);
root5.left.left.left.left.left = new TreeNode(6);
console.log(diameterOfBinaryTree(root5)); // 5
