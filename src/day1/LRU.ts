// least recently used caching mechanism which jumps to node(v) in constant time O(1)
type Node<K, T> = {
    value: T;
    prev?: Node<K, T>;
    next?: Node<K, T>;
    // store key on node so we dont have to have evicted cache
    key: K;
};

export default class LRU<K, V> {
    private length: number;
    private capacity: number;
    private head?: Node<K, V>;
    private tail?: Node<K, V>;

    private cache: Map<K, Node<K, V>>;
    // private evicted: Map<Node<V>, K>;

    constructor(capacity = 10) {
        if (capacity <= 0)
            throw new Error("Capacity must be a positive integer");
        this.length = 0;
        this.capacity = capacity;
        this.head = this.tail = undefined;
        this.cache = new Map<K, Node<K, V>>();
        // this.evicted = new Map<Node<V>, K>();
    }

    private createNode(key: K, value: V): Node<K, V> {
        return { key, value };
    }

    private detach(node: Node<K, V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next; // Update head if necessary
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev; // Update tail if necessary
        }

        node.next = undefined;
        node.prev = undefined;
    }

    private prepend(node: Node<K, V>): void {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache(): void {
        if (this.length <= this.capacity) return;

        const tail = this.tail as Node<K, V>;

        this.detach(tail);

        // const key = this.evicted.get(tail)!;
        this.cache.delete(tail.key);
        // this.evicted.delete(tail);

        this.length--; // Decrement only when a node is evicted
    }

    update(key: K, value: V): void {
        let node = this.cache.get(key);

        if (node) {
            this.detach(node);
            node.value = value; // Update value before prepending
            this.prepend(node);
        } else {
            node = this.createNode(key, value);
            this.length++;
            this.trimCache();

            this.cache.set(key, node);
            // this.evicted.set(node, key);
            this.prepend(node); // New node is added to the front
        }
    }

    get(key: K): V | undefined {
        const node = this.cache.get(key);
        if (!node) return undefined;

        this.detach(node);
        this.prepend(node);

        return node.value; // No need for optional chaining
    }

    print() {
        console.log("cache", this.cache);
        // console.log("evicted", this.evicted);
    }
}
