class Node<T> {
    constructor(item: T) {
        this.value = item;
        this.next = undefined;
        this.prev = undefined;
    }
    value: T;
    prev: Node<T> | undefined;
    next: Node<T> | undefined;
}
export default class DoublyLinkedList<T> {
    constructor() {}
    public length = 0;

    head: Node<T> | undefined;
    tail: Node<T>;

    getLength() {
        let count = 0;
        let curr = this.head;

        while (curr !== undefined) {
            count++;
            curr = curr?.next;
        }
        return count;
    }

    append(item: T): void {
        const newNode = new Node(item);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next !== undefined) {
                curr = curr.next;
            }
            curr.next = newNode;
            newNode.prev = curr;
            this.tail = newNode;
        }
        this.length++;
    }
    print(): Node<T>[] {
        const list = [];

        let curr = this.head;
        while (curr !== undefined) {
            list.push(curr);
            curr = curr.next;
        }
        return list;
    }
    // prepend(item: T): void {}
    // insertAt(item: T, idx: number): void {}
    remove(item: T): T | undefined {
        if (this.head === undefined) return undefined;
        else if (this.head?.value === item) {
            this.head = this.head.next;
            if (this.head !== undefined) {
                this.head.prev = undefined;
            }
            this.length--;
            return item;
        } else if (this.tail.value === item) {
            if (this.tail.prev) {
                this.tail = this.tail.prev;
                this.tail.next = undefined;
                this.length--;

                return item;
            }
        }

        // item is not in head or tail
        let curr = this.head;

        while (curr !== undefined) {
            // item is B in A -> B -> C
            if (curr.value === item) {
                // A -> C
                if (curr.prev) {
                    curr.prev.next = curr.next;
                }
                // A <- C
                if (curr.next) {
                    curr.next.prev = curr.prev;
                }
                this.length--;
                return item;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx >= this.length) return undefined;

        let count = 0;
        let curr = this.head;
        while (curr !== undefined) {
            if (count === idx) {
                return curr.value;
            }
            count++;
            curr = curr?.next;
        }
        return undefined;
    }
    // removeAt(idx: number): T | undefined {}
}

const test = new DoublyLinkedList<number>();
test.append(5);
test.append(22);
test.append(33);
test.append(800);
// test.print().forEach((el) => console.log(el));
console.log(test.getLength());
console.log(test.get(5));
