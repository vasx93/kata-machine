// STack is LIFO
class Node<T> {
    value: T;
    next?: Node<T>;

    constructor(item: T) {
        this.value = item;
        this.next = undefined;
    }
}
export default class Stack<T> {
    public length: number;
    head?: Node<T>;
    tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    push(item: T): void {
        const newNode = new Node(item);

        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop(): T | undefined {
        if (!this.tail) return undefined;

        const tail = this.tail;

        // set new tail
        let curr = this.head;
        while (curr !== undefined) {
            if (curr.next === tail) {
                this.tail = curr;
                this.tail.next = undefined;
            }
            curr = curr.next;
        }

        this.length--;
        if (this.length === 1) {
            this.head = this.tail;
        } else if (this.length === 0) {
            this.head = this.tail = undefined;
        }
        return tail.value;
    }
    peek(): T | undefined {
        return this.tail?.value;
    }
    print(): void {
        const elements = [];
        let curr = this.head;
        while (curr !== undefined) {
            elements.push(curr);
            curr = curr.next;
        }
        console.log(elements);
    }
}
