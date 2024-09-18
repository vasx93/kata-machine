// queue is a linked list
class Node<T> {
    constructor(item: T) {
        this.value = item;
        this.next = undefined;
    }
    value: T;
    next: Node<T> | undefined;
}
export default class Queue<T> {
    public length: number = 0;
    head: Node<T> | undefined;
    tail: Node<T> | undefined;

    constructor() {}

    // add to tail
    enqueue(item: T): void {
        const newNode = new Node(item);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    // remove from head
    deque(): T | undefined {
        if (this.length === 0) return undefined;
        else if (this.length === 1) {
            const val = this.head?.value;

            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return val;
        }
        // multiple nodes
        const head = this.head;

        this.head = head?.next;

        this.length--;

        if (this.length === 1) {
            this.head = this.tail;
        }
        return head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
