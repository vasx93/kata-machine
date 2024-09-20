function recursion(n: number): number {
    if (n === 1) return 1; // base case

    return n + recursion(n - 1);
}
