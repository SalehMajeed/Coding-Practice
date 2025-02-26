function insertSort(stack, element) {
    if (stack.length < 1 || stack[stack.length - 1] >= element) {
      stack.push(element);
      return;
    }
  
    const top = stack.pop();
    insertSort(stack, element);
    stack.push(top);
  }
  
  function sortStack(stack) {
    if (stack.length < 1) {
      return;
    }
  
    const top = stack.pop();
    sortStack(stack);
    insertSort(stack, top);
    return stack;
  }
  
  console.log(sortStack([34, 3, 31, 98, 92, 23]));
  console.log(sortStack([30, -5, 18, 14, -3]));
  