// in order expores leftmost branch first before marking a node as visited and exploring children
export default function in_order_search(head: BinaryNode<number>): number[] {
    const visited: number[] = [];

    traverse(visited, head);
    return visited;
}

function traverse(visited: number[], node: BinaryNode<number> | null): void {
    if (!node) return;

    traverse(visited, node.left);

    visited.push(node.value);

    traverse(visited, node.right);
}
