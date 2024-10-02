class TrieNode {
    children: Record<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

export default class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // only complete words
    insert(word: string): void {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEndOfWord = true;
    }

    delete(word: string): void {
        this.deleteRec(this.root, word, 0);
    }

    find(prefix: string): string[] {
        let node = this.root;

        const output: string[] = [];

        for (const char of prefix) {
            // no word in trie starts with prefix so break and return []
            if (!node.children[char]) break;

            node = node.children[char];
        }
        this.findAllWords(node, prefix, output);
        return output;
    }

    private findAllWords(node: TrieNode, prefix: string, arr: string[]) {
        if (node.isEndOfWord) {
            arr.push(prefix);
        }

        for (const char in node.children) {
            this.findAllWords(node.children[char], prefix + char, arr);
        }
    }

    private deleteRec(node: TrieNode, word: string, idx: number) {
        if (idx === word.length) {
            if (!node.isEndOfWord) return false;

            node.isEndOfWord = false;

            return this.hasNoChildren(node);
        }

        const char = word[idx];

        const childNode = node.children[char];

        if (!childNode) return false;

        const shouldDelete = this.deleteRec(childNode, word, idx + 1);

        if (!shouldDelete) return false;

        delete node.children[char];
        return this.hasNoChildren(node);
    }

    private hasNoChildren(node: TrieNode): boolean {
        return Object.keys(node.children).length === 0;
    }
}
