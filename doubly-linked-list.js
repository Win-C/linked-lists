"use strict";

/** Node: node for doubly linked list. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
    }
  }

  getNext(){

  }

  getPrev(){

  }

}