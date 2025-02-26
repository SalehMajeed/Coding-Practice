function insertAtBottom(stack, item) {
    if (stack.length < 1) {
      stack.push(item);
      return;
    }
    const top = stack.pop();
    insertAtBottom(stack, item);
    stack.push(top);
  }
  
  function reverseStack(stack) {
    if (stack.length < 1) {
      return;
    }
  
    const top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
    return stack;
  }
  
  console.log(reverseStack([34, 3, 31, 98, 92, 23]));
  console.log(reverseStack([30, -5, 18, 14, -3]));
  