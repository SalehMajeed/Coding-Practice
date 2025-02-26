class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function bottomView(node) {
  if (node === null) return [];
  const map = {};
  const queue = [];
  queue.push({ node: node, line: 0 });

  while (queue.length > 0) {
    const { line, node } = queue.shift();
    map[line] = node.val;
    if (node.left) queue.push({ node: node.left, line: line - 1 });
    if (node.right) queue.push({ node: node.right, line: line + 1 });
  }
  const sortedKeys = Object.keys(map).sort((a, b) => a - b);
  return sortedKeys.map((eachKey) => map[eachKey]);
}

const root1 = new TreeNode(20);
root1.left = new TreeNode(8);
root1.right = new TreeNode(22);
root1.left.left = new TreeNode(5);
root1.left.right = new TreeNode(3);
root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(25);
root1.left.right.left = new TreeNode(10);
root1.left.right.right = new TreeNode(14);
console.log(bottomView(root1)); // [5, 10, 4, 14, 25]

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(7);
console.log(bottomView(root2)); // [4, 2, 5, 3, 7]
