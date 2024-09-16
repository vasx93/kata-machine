export default function bs_list(haystack: number[], needle: number): boolean {
    // binary has to be done on sorted list
    haystack.sort((a, b) => a - b);

    let left = 0;
    let right = haystack.length;
    // right(high) is exclusive
    // left(low) is inclusive
    while (left < right) {
        const middle = Math.floor(left + (right - left) / 2);
        const val = haystack[middle];

        if (val === needle) {
            return true;
        } else if (val > needle) {
            right = middle;
        } else if (val < needle) {
            left = middle + 1;
        }
    }

    return false;
}
