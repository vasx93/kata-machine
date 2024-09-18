// queue is a FIFO linked list
class Node<T> {
    constructor(item: T) {
        this.value = item;
        this.next = undefined;
    }
    value: T;
    next: Node<T> | undefined;
}
export default class Queue<T> {
    public length: number;
    head?: Node<T>;
    tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // add to tail
    enqueue(item: T): void {
        const newNode = new Node(item);

        if (this.length === 0) {
            this.head = this.tail = newNode;
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
            const head = this.head;

            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return head?.value;
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
