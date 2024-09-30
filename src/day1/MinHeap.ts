export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    print() {
        console.log(this.data);
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    // delete smallest element (head)
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    // returns parent index of element at idx(argument)
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    // always odd index
    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }
    // always even index
    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }

    private heapifyUp(idx: number) {
        if (idx === 0) return;

        const p = this.parent(idx);

        // swap values and pass parent idx to compare again
        if (this.data[p] > this.data[idx]) {
            this.swap(idx, p);
            this.heapifyUp(p);
        }
    }

    private heapifyDown(idx: number) {
        if (idx >= this.length) return;

        const Lidx = this.leftChild(idx);
        const Ridx = this.rightChild(idx);

        if (idx >= this.length || Lidx >= this.length) return;

        const lV = this.data[Lidx];
        const rV = this.data[Ridx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.swap(idx, Ridx);
            this.heapifyDown(Ridx);
        } else if (rV > lV && v > lV) {
            this.swap(idx, Lidx);
            this.heapifyDown(Lidx);
        }
    }

    private swap(idx: number, swapIdx: number) {
        [this.data[idx], this.data[swapIdx]] = [
            this.data[swapIdx],
            this.data[idx],
        ];
    }
}
