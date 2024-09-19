export default class ArrayList<T> {
    public length: number;
    list: (T | undefined)[];

    constructor() {
        this.length = 0;
        this.list = [];
    }

    prepend(item: T): void {
        this.length = this.list.unshift(item);
    }
    insertAt(item: T, idx: number): void {
        if (idx === this.length) {
            this.list.push(item);
            this.length++;
            return;
        } else if (idx > this.length) {
            this.list[idx] = item;

            for (let i = this.length; i < idx; i++) {
                this.list[i] = undefined;
            }
            this.length = idx;
        }
    }
    append(item: T): void {
        this.list.push(item);
        this.length++;
    }
    remove(item: T): T | undefined {
        const idx = this.list.findIndex((el) => el === item);

        return this.removeAt(idx);
    }
    get(idx: number): T | undefined {
        return this.list[idx];
    }
    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) return undefined;

        const item = this.list[idx];

        for (let i = idx; i < this.length - 1; i++) {
            this.list[i] = this.list[i + 1];
        }
        //remove last item since its  coppied into idx before
        this.list.pop();
        this.length--;

        return item;
    }
    print(): void {
        console.log(this.list);
    }
}
