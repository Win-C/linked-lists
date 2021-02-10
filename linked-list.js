"use strict";

/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    // Explicit paths: if LL is empty vs. not
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // if (this.head === null) this.head = newNode;
    // if (this.tail !== null) this.tail.next = newNode;
    // this.tail = newNode;

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    // Explicit paths: if LL is empty vs. not
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    // newNode.next = this.head;
    // this.head = newNode;
    // if (this.tail === null) this.tail = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // Better strategy: use class method to remove from end of LL
    return this.removeAt(this.length - 1);

    // let removedNode = this.tail;
    // let current = this.head;
    // let prevNode = null;

    // if (this.length === 0) throw Error("no items in linked list");

    // while (current !== null){
    //   if (current.val === removedNode.val){
    //     this.tail = prevNode;
    //     this.length--;
    //   }
    //   prevNode = current;
    //   current = current.next
    // }

    // // if list is now empty, set head to null
    // if (this.length === 0) this.head = null;

    // return removedNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let oldHead = this.head;
    let newHead = this.head.next;

    if (this.length === 0) throw Error("no items in linked list");

    this.head = newHead;
    this.length--;

    // If length becomes 0 or 1, set tail equal to head
    if (this.length <= 1) this.tail = newHead;

    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let counter = 0;

    if (this.length === 0) throw Error("no items in linked list");

    if (idx > this.length) throw Error("error! invalid index");

    while (counter < idx && current !== null) {
      current = current.next;
      counter++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let counter = 0;

    if (this.length === 0) throw Error("no items in linked list");

    if (idx > this.length) throw Error("error! invalid index");

    // Note: repeating from method above. Refactor?
    while (counter < idx) {
      current = current.next;
      counter++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let current = this.head;
    let counter = 0;
    let prevNode = null;
    let newNode = new Node(val);

    // if empty list, add one item and return
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = new Node(val);
      this.length++;
      return;
    }

    if (idx > this.length) throw Error("error! invalid index");

    while (counter < idx) {
      prevNode = current;
      current = current.next;
      counter++;
    }

    prevNode.next = newNode;
    newNode.next = current;

    // if at end, then make tail equal to the new value
    if (current === null) this.tail = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let counter = 0;
    let current = this.head;
    let prevNode = null;
    let nextNode = this.head.next;

    if (this.length === 0) throw Error("no items in linked list");

    if (idx > this.length) throw Error("error! invalid index");

    if (idx === 0) return this.shift();

    while (counter < idx) {
      prevNode = current;
      current = current.next;
      nextNode = current.next;
      counter++;
    }

    this.length--;

    // check if removing one item results in an empty list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return current.val;
    }

    prevNode.next = nextNode;

    // check if removing last item in list to set tail
    this.tail = nextNode === null ? prevNode : nextNode;

    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sum = 0;

    if (this.length === 0) return 0;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    return (sum / this.length);
  }
}

module.exports = LinkedList;
