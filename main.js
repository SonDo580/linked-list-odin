function nodeFactory(value = null, next = null) {
  return { value, next };
}

function linkedListFactory() {
  const list = {
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
    const node = nodeFactory(value);
  };

  return { append };
}
