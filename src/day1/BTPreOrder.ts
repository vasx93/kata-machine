// preorder makrs the node as visited, then explores its children
export default function pre_order_search(head: BinaryNode<number>): number[] {
    const visited: number[] = [];

    traverse(visited, head);
    return visited;
}

function traverse(visited: number[], node: BinaryNode<number> | null): void {
    if (!node) return;

    visited.push(node.value);

    traverse(visited, node.left);
    traverse(visited, node.right);
}
