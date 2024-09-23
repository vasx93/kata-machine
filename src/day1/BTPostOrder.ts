// postorder explores children first, then marks the node as visited
export default function post_order_search(head: BinaryNode<number>): number[] {
    const visited: number[] = [];

    traverse(visited, head);
    return visited;
}

function traverse(visited: number[], node: BinaryNode<number> | null): void {
    if (!node) return;

    traverse(visited, node.left);
    traverse(visited, node.right);

    visited.push(node.value);
}
