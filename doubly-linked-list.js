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
      this.tail = this.head;
    } else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  getNext(){

  }

  getPrev(){

  }


  /** unshift(val): add new value to start of list */

  unshift(val){
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }


  /** pop(): return & remove last item. */

  pop(){
    return this.removeAt(this.length - 1);
  }

  /** removeAt(idx): return & remove item at idx. */

  removeAt(idx){
    
  }
}

module.exports = DoublyLinkedList;