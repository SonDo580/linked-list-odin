function nodeFactory(value = null, next = null) {
  return { value, next };
}

function linkedListFactory() {
  let list = null;

  const head = () => {
    return list;
  };

  const tail = () => {
    let node = head();
    if (node === null) {
      return node;
    }

    while (node.next !== null) {
      node = node.next;
    }
    return node;
  };

  const append = (value) => {
    const newNode = nodeFactory(value);
    let node = head();

    if (node === null) {
      list = newNode;
      return;
    }

    while (node.next !== null) {
      node = node.next;
    }
    node.next = newNode;
  };

  const prepend = (value) => {
    const newNode = nodeFactory(value, head());
    list = newNode;
  };

  const size = () => {
    let node = head();
    if (node === null) {
      return 0;
    }

    let size = 1;
    while (node.next !== null) {
      node = node.next;
      size++;
    }
    return size;
  };

  const at = (index) => {
    if (size() === 0) {
      throw Error("Empty list");
    }

    if (index < 0 || index >= size()) {
      throw Error("Out of range");
    }

    let node = head();
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  };

  const pop = () => {
    if (size() === 0) {
      throw Error("Empty list");
    }

    if (size() === 1) {
      list = null;
      return;
    }

    let newTail = at(size() - 2);
    newTail.next = null;
  };

  const contains = (value) => {
    if (size() === 0) {
      return false;
    }

    let node = head();
    while (node !== null) {
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
    while (node !== null) {
      if (node.value === value) {
        foundIndex = i;
      }
      node = node.next;
      i++;
    }
    return foundIndex;
  };

  const toString = () => {
    let str = "";
    let node = head();
    while (node !== null) {
      str += `( ${node.value} ) -> `;
      node = node.next;
    }
    str += "null";
    return str;
  };

  const insertAt = (index, value) => {
    if (index === 0) {
      prepend(value);
      return;
    }

    if (index === size()) {
      append(value);
      return;
    }

    if (index < 0 || index > size()) {
      throw Error("Out of range");
    }

    const nodeAtIndex = at(index);
    const nodeBeforeIndex = at(index - 1);
    const newNode = nodeFactory(value);

    nodeBeforeIndex.next = newNode;
    newNode.next = nodeAtIndex;
  };

  const removeAt = (index) => {
    if (size() === 0) {
      throw Error("Empty list");
    }

    if (index === 0) {
      list = list.next;
      return;
    }

    if (index === size() - 1) {
      pop();
      return;
    }

    if (index < 0 || index >= size()) {
      throw Error("Out of range");
    }

    const nodeBeforeIndex = at(index - 1);
    const nodeAfterIndex = at(index + 1);
    nodeBeforeIndex.next = nodeAfterIndex;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

// TEST
// const linkedList = linkedListFactory();
// console.log(linkedList.toString());
// console.log("head: ", linkedList.head());
// console.log("tail: ", linkedList.tail());
// linkedList.append(2);
// linkedList.append("a");
// linkedList.prepend(1);
// console.log(linkedList.toString());
// console.log("size: ", linkedList.size());
// console.log("at 1: ", linkedList.at(1));
// linkedList.pop();
// console.log("after pop: ", linkedList.toString());
// console.log("list contains 2: ", linkedList.contains(2));
// console.log("list contains h: ", linkedList.contains("h"));
// console.log("find 2: ", linkedList.find(2));
// console.log("find h: ", linkedList.find("h"));
// linkedList.prepend("Shadow");
// console.log(linkedList.toString());
// linkedList.append("Sonic");
// console.log(linkedList.toString());
// linkedList.insertAt(1, 1.5);
// linkedList.insertAt(0, 1.5);
// linkedList.insertAt(linkedList.size(), 1.5);
// console.log(linkedList.toString());
// linkedList.removeAt(0);
// linkedList.removeAt(3);
// linkedList.removeAt(linkedList.size() - 1, 1.5);
// console.log(linkedList.toString());
