function nodeFactory(value = null, next = null) {
  //   need getter and setter
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

  const head = () => {
    return list;
  };

  const tail = () => {
    let node = list;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  };

  const at = (index) => {
    let node = list;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  };

  return { append, prepend, size, head, tail, at };
}
