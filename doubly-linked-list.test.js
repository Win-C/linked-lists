const DoublyLinkedList = require("./doubly-linked-list")

describe("push", function() {
  it("appends node and increments length", function() {
    let dbLst = new DoublyLinkedList();

    dbLst.push(5);
    expect(dbLst.length).toBe(1);
    expect(dbLst.head.val).toBe(5);
    expect(dbLst.tail.val).toBe(5);
    expect(dbLst.tail.prev).toBe(null);

    dbLst.push(10);
    expect(dbLst.length).toBe(2);
    expect(dbLst.head.val).toBe(5);
    expect(dbLst.head.next.val).toBe(10);
    expect(dbLst.head.next.prev.val).toBe(5);
    expect(dbLst.tail.val).toBe(10);

    dbLst.push(15);
    expect(dbLst.length).toBe(3);
    expect(dbLst.head.val).toBe(5);
    expect(dbLst.head.next.next.val).toBe(15);
    expect(dbLst.head.next.next.prev.val).toBe(10);
    expect(dbLst.tail.val).toBe(15);
  });
});

describe("unshift", function() {
  it("adds node at start and increments length", function() {
    let dbLst = new DoublyLinkedList();

    dbLst.unshift(5);
    expect(dbLst.length).toBe(1);
    expect(dbLst.head.val).toBe(5);
    expect(dbLst.tail.val).toBe(5);
    expect(dbLst.tail.prev).toBe(null);

    dbLst.unshift(10);
    expect(dbLst.length).toBe(2);
    expect(dbLst.head.val).toBe(10);
    expect(dbLst.head.next.val).toBe(5);
    expect(dbLst.head.next.prev.val).toBe(10);
    expect(dbLst.tail.val).toBe(5);

    dbLst.unshift(15);
    expect(dbLst.length).toBe(3);
    expect(dbLst.head.val).toBe(15);
    expect(dbLst.head.next.next.val).toBe(5);
    expect(dbLst.head.next.next.prev.val).toBe(10);
    expect(dbLst.tail.val).toBe(5);
  });
});

describe("pop", function() {
  it("removes node at end and decrements length", function() {
    let dbLst = new LinkedList([5, 10]);

    expect(dbLst.pop()).toBe(10);
    expect(dbLst.head.val).toBe(5);
    expect(dbLst.tail.val).toBe(5);
    expect(dbLst.tail.prev).toBe(null);
    expect(dbLst.length).toBe(1);

    expect(dbLst.pop()).toBe(5);
    expect(dbLst.head).toBe(null);
    expect(dbLst.tail).toBe(null);
    expect(dbLst.length).toBe(0);
  });
});