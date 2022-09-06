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

    let lastNode = list;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
    }

    lastNode.next = newNode;
  };

  const prepend = (value) => {
    const newNode = nodeFactory(value, list);
    list = newNode;
  };

  return { append, prepend };
}
