function nodeFactory(value = null, next = null) {
  return { value, next };
}

function linkedListFactory() {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: "a",
        next: null,
      },
    },
  };

  const append = (value) => {
    const newNode = nodeFactory(value);
    let tail = tail();
    tail.next = newNode;
  };

  const prepend = (value) => {
    const newNode = nodeFactory(value, head());
    list = newNode;
  };

  const size = () => {
    let node = head();
    let size = 1;
    while (node.next !== null) {
      node = node.next;
      size++;
    }
    return size;
  };

  const head = () => {
    return list;
  };

  const tail = () => {
    let node = head();
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  };

  const at = (index) => {
    let node = head();
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  };

  const pop = () => {
    let newTail = at(size() - 1);
    newTail.next = null;
  };

  const contains = (value) => {
    let node = head();
    while (node.next !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  const find = (value) => {
    let node = head();
    let foundIndex = null;
    let i = 0;
    while (node.next !== null) {
      if (node.value === value) {
        foundIndex = i;
      }
      node = node.next;
      i++;
    }
    return foundIndex;
  };

  return { append, prepend, size, head, tail, at, pop, contains, find };
}
