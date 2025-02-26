class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function createTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  const newPreOrder = preorder[0];
  const inOrderIndex = inorder.indexOf(newPreOrder);
  const root = new TreeNode(newPreOrder);

  root.left = createTree(preorder.slice(1, inOrderIndex + 1), inorder.slice(0, inOrderIndex));
  root.right = createTree(preorder.slice(inOrderIndex + 1), inorder.slice(inOrderIndex + 1));
  return root;
}

const inorder = [9, 3, 15, 20, 7];
const preorder = [3, 9, 20, 15, 7];
const tree = createTree(preorder, inorder);
console.log(tree);
