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

    let node = list;
    while (node.next !== null) {
      node = node.next;
    }

    node.next = newNode;
  };

  const prepend = (value) => {
    const newNode = nodeFactory(value, list);
    list = newNode;
  };

  const size = () => {
    let node = list;
    let size = 1;
    while (node.next !== null) {
      node = node.next;
      size++;
    }
    return size;
  };

  return { append, prepend, size };
}
