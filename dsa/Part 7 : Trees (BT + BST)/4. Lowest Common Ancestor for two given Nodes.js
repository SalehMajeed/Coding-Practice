class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree(arr, index) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const root = new TreeNode(arr[index]);
  root.left = createBinaryTree(arr, 2 * index + 1);
  root.right = createBinaryTree(arr, 2 * index + 2);
  return root;
}

const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = createBinaryTree(arr, 0);
const node5 = new TreeNode(5);
const node1 = new TreeNode(1);

function findLowestCommonAncestor(root, p, q) {
  if (root.val === p.val || root.val === q.val) {
    return root;
  }
  const leftSide = findLowestCommonAncestor(root.left, p, q);
  const rightSide = findLowestCommonAncestor(root.left, p, q);

  if (leftSide === null) {
    return rightSide;
  } else if (rightSide === null) {
    return leftSide;
  } else {
    return root;
  }
}

console.log(findLowestCommonAncestor(root, node5, node1).val); // 3
