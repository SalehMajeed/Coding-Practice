function simpleLinkedList(arr) {
  const linkedList = { value: null, next: null };
  let current = linkedList;
  arr.forEach((currentEle) => {
    if (current.value === null) {
      current.value = currentEle;
      current.next = null;
    } else {
      current.next = {
        value: currentEle,
        next: null,
      };
      current = current.next;
    }
    console.log(linkedList);
  });
  return linkedList;
}

console.log(simpleLinkedList([1, 2, 3]));
