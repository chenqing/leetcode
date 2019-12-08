/**
 * 单链表, 假设索引从0开始
 */
interface LinkNode<T> {
  data: T,
  next: LinkNode<T>
}

interface SingleLinkedList<T> {
  head: LinkNode<T>;
  length: number;
  tail: LinkNode<T>;
  next: LinkNode<T>;
  data: LinkNode<T>;

  append(data: T): boolean;
  insert(index: number, data: T): boolean;
  remove(index): LinkNode<T>;
  get(index): LinkNode<T>;

}

class LinkNode<T> implements LinkNode<T> {
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}


class SingleLinkedList<T> implements SingleLinkedList<T> {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data: T) {
    const node = new LinkNode(data);

    // first add
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    this.length++
    return true;
  }

  // insert after 
  insert(index, data) {
    if (index >= this.length) {
      this.append(data);
    } else {
      const node = new LinkNode(data);
      let current = this.get(index);
      let next = current.next;
      current.next = node;
      current.next.next = next;
    }

    this.length++;
    return true;
  }

  remove(index) {

    if (index === 0) {
      this.head = this.head.next;
      this.length--;

      return this.head;
    } else if (index > 0 && index < this.length) {
      const current = this.get(index);
      const pre = this.get(index - 1);

      pre.next = current.next;

      // 如果删除的是尾节点
      if (current === null) {
        this.tail = pre;
      }

      this.length--;

      return current;

    } else {
      return null;
    }

  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null
    }

    let nodeIndex = 0;
    let current = this.head;

    while (nodeIndex < index) {
      current = current.next;
      nodeIndex++;
    }

    return current;
  }

  print(): void {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

}


const testLinkedList = new SingleLinkedList();

console.log('-----append----');
[1, 2, 3, 4, 5, 6].forEach(age => {
  testLinkedList.append({
    age
  });
});
testLinkedList.print()

console.log('------remove-----')
testLinkedList.remove(2)
testLinkedList.print()

console.log('-----insert------')

testLinkedList.insert(3, {age: 98})
testLinkedList.print()





