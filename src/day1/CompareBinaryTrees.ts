export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) return true;
    else if (!a || !b) return false;
    else if (a.value !== b.value) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}
