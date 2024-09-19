export default class Map<T extends string | number, V> {
    kv: Record<string | number, V>;
    kvSize: number;

    constructor() {
        this.kv = {};
        this.kvSize = 0;
    }

    get(key: T): V | undefined {
        return this.kv[key];
    }
    set(key: T, value: V): void {
        this.kv[key] = value;
        this.kvSize++;
    }
    delete(key: T): V | undefined {
        const item = this.get(key);
        if (!item) return undefined;

        delete this.kv[key];
        this.kvSize--;
        return item;
    }
    size(): number {
        return this.kvSize;
    }
}
