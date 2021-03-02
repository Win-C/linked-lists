const DoublyLinkedList = require("./doubly-linked-list")

describe("push", function() {
  it("appends node and increments length", function() {
    let dbLst = new DoublyLinkedList();

    dbLst.push(5);
    expect(dbLst.length).toBe(1);
    expect(dbLst.head.val).toBe(5);
    expect(dbLst.tail.val).toBe(5);

    dbLst.push(10);
    expect(dbLst.length).toBe(2);
    expect(dbLst.head.val).toBe(5);
    expect(dbLst.head.next.val).toBe(10);
    expect(dbLst.tail.val).toBe(10);

    dbLst.push(15);
    expect(dbLst.length).toBe(3);
    expect(dbLst.head.val).toBe(5);
    expect(dbLst.head.next.next.val).toBe(15);
    expect(dbLst.tail.val).toBe(15);
  });
});
