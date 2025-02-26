class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function morrisPreorderTraversal(root) {
  const elements = [];
  let current = root;
  while (current !== null) {
    if (current.left === null) {
      elements.push(current.val);
      current = current.right;
    } else {
    }

    if (current.right === null) {
      elements.push(current.val);
      current.right = current.left;
    }
  }
  return elements;
}

console.log(morrisPreorderTraversal(root)); // [1 2 4 5 3]
